import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import MainLoader from '@Components/shared/MainLoader/MainLoader';

import './App.scss';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';

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
                    height: '120px',
                    padding: '10px',
                    border: '1px solid black'
                }}
            >
                <ContentLoadingIndicator
                    width="50px"
                    height="50px"
                    borderRadius="100%"
                />
                <ContentLoadingIndicator />
                <ContentLoadingIndicator />
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
