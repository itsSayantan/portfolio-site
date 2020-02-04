import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import MainLoader from '@Components/shared/MainLoader/MainLoader';
import MobileMenu from '@Components/MobileMenu/MobileMenu';
import MainHeader from '@Components/MainHeader/MainHeader';

import { reducer } from '@Shared/reducers/AppReducer';
import { getInitialStateValues } from '@Shared/reducers/factory';
import { AppContext } from '@Shared/contexts/AppContext';

const About = React.lazy(() => import('@Components/About/About'));

const App: React.FC = (props: any) => {
    const [state, dispatch] = React.useReducer(
        reducer,
        getInitialStateValues()
    );

    return (
        <BrowserRouter>
            <AppContext.Provider value={{ state, dispatch }}>
                <MainHeader />
                <MainLoader />
                <MobileMenu />
                <React.Suspense fallback={<h3>Loading...</h3>}>
                    <Switch>
                        <Route path="/" component={About} />
                    </Switch>
                </React.Suspense>
            </AppContext.Provider>
        </BrowserRouter>
    );
};

export default App;
