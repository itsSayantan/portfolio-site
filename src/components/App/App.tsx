import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import MainLoader from '@Components/global/MainLoader/MainLoader';

import './App.scss';

const About = React.lazy(() => import('@Components/About/About'));

const App: React.FC = (props: any) => {
    return (
        <BrowserRouter>
            <MainLoader />
            <React.Suspense fallback={<h3>Loading...</h3>}>
                <ul>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/about" component={About} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
};

export default App;
