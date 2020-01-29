import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import MainLoader from '@Components/shared/MainLoader/MainLoader';
import ReactLoadingCard from '@Components/shared/ReactLoadingCard/ReactLoadingCard';

import './App.scss';

const About = React.lazy(() => import('@Components/About/About'));

const App: React.FC = (props: any) => {
    return (
        <BrowserRouter>
            <MainLoader />
            <div
                style={{
                    position: 'relative',
                    top: '200px',
                    left: '20px',
                    width: '250px',
                    height: '120px'
                }}
            >
                <ReactLoadingCard cardStructure={{}} />
            </div>
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
