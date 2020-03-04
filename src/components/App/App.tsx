import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CEB from 'custom-error-boundary';

import './App.scss';

import MainLoader from '@Components/shared/MainLoader/MainLoader';
import MobileMenu from '@Components/MobileMenu/MobileMenu';
import MainHeader from '@Components/MainHeader/MainHeader';
import AppNotification from '@Components/AppNotification/AppNotification';

import { reducer, createInitialState } from '@Shared/reducers/AppReducer';
import { getInitialStateValues } from '@Shared/reducers/factory';
import { AppContext } from '@Shared/contexts/AppContext';

const Home = React.lazy(() => import('@Pages/Home/Home'));
const About = React.lazy(() => import('@Pages/About/About'));
const Projects = React.lazy(() => import('@Pages/Projects/Projects'));
const Post = React.lazy(() => import('@Pages/Post/Post'));
const PageNotFound = React.lazy(() =>
    import('@Pages/PageNotFound/PageNotFound')
);
import PwaFallback from '@Pages/PwaFallback/PwaFallback';

import { setAppNotificationDataAction } from '@Shared/constants';

const App: React.FC = (props: any) => {
    const [state, dispatch] = React.useReducer(
        reducer,
        getInitialStateValues(),
        createInitialState
    );

    React.useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js', { scope: '/' })
                .then(reg => {
                    reg.onupdatefound = () => {
                        if (reg.installing) {
                            const newServiceWorker = reg.installing;
                            newServiceWorker.onstatechange = () => {
                                if (newServiceWorker.state === 'installed') {
                                    // show the new update message
                                    dispatch({
                                        type: setAppNotificationDataAction,
                                        payload: {
                                            message:
                                                'A new version of this site is available.',
                                            type: 'info',
                                            closeButton: {
                                                customProperties: {
                                                    text: 'Refresh',
                                                    styles: {
                                                        backgroundColor:
                                                            '#2e76ad',
                                                        color: '#fff'
                                                    },
                                                    onClick: () => {
                                                        // send the message to skipwaiting to the service worker
                                                        newServiceWorker.postMessage(
                                                            {
                                                                type:
                                                                    'APP_REFRESH'
                                                            }
                                                        );
                                                        window.location.reload();
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                            };
                        }
                    };
                })
                .catch(error => {
                    console.log(error);
                    dispatch({
                        type: setAppNotificationDataAction,
                        payload: {
                            message:
                                "Service worker could not be registered. You won't be able to enjoy the offline experience.",
                            type: 'error'
                        }
                    });
                });
        }
    }, []);

    return (
        <BrowserRouter>
            <AppContext.Provider value={{ state, dispatch }}>
                <MainHeader />
                <MainLoader />
                <MobileMenu />
                <div className="app-content">
                    <div className="app-notification-section">
                        <AppNotification />
                    </div>
                    <React.Suspense fallback={<h3>Loading...</h3>}>
                        <CEB fallbackUI={() => <PwaFallback />}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/projects" component={Projects} />
                                <Route
                                    exact
                                    path="/posts/:postID"
                                    component={Post}
                                />
                                <Route
                                    exact
                                    path="/404"
                                    component={PageNotFound}
                                />
                                <Redirect to="/404" />
                            </Switch>
                        </CEB>
                    </React.Suspense>
                </div>
            </AppContext.Provider>
        </BrowserRouter>
    );
};

export default App;
