import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import MainLoader from '@Components/shared/MainLoader/MainLoader';

import './App.scss';

const About = React.lazy(() => import('@Components/About/About'));

const App: React.FC = (props: any) => {
    return (
        <BrowserRouter>
            <MainLoader />
            <ul>
                <li>
                    <Link to="about">About</Link>
                </li>
            </ul>
            <React.Suspense fallback={<h3>Loading...</h3>}>
                <Switch>
                    <Route path="/" component={About} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
};

export default App;
