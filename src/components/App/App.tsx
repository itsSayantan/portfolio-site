import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

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
const PwaFallback = React.lazy(() => import('@Pages/PwaFallback/PwaFallback'));

const App: React.FC = (props: any) => {
    const [state, dispatch] = React.useReducer(
        reducer,
        getInitialStateValues(),
        createInitialState
    );

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
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/projects" component={Projects} />
                            <Route
                                exact
                                path="/posts/:postID"
                                component={Post}
                            />
                            <Route exact path="/404" component={PageNotFound} />
                            <Redirect to="/404" />
                        </Switch>
                    </React.Suspense>
                </div>
            </AppContext.Provider>
        </BrowserRouter>
    );
};

export default App;
