import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import MainLoader from '@Components/shared/MainLoader/MainLoader';
import MobileMenu from '@Components/MobileMenu/MobileMenu';
import MainHeader from '@Components/MainHeader/MainHeader';

import { reducer, createInitialState } from '@Shared/reducers/AppReducer';
import { getInitialStateValues } from '@Shared/reducers/factory';
import { AppContext } from '@Shared/contexts/AppContext';

const Home = React.lazy(() => import('@Pages/Home/Home'));
const About = React.lazy(() => import('@Pages/About/About'));
const Projects = React.lazy(() => import('@Pages/Projects/Pojects'));

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
                <React.Suspense fallback={<h3>Loading...</h3>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                    </Switch>
                </React.Suspense>
            </AppContext.Provider>
        </BrowserRouter>
    );
};

export default App;
