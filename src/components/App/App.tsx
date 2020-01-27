import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { ActionType } from '@Shared/types/reducer';

import './App.scss';

const Home = React.lazy(() => import('@Components/Home/Home'));
const About = React.lazy(() => import('@Components/About/About'));
const Contact = React.lazy(() => import('@Components/Contact/Contact'));

const App: React.FC = (props: any) => {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<h3>Loading...</h3>}>
                <ul>
                    <li>
                        <Link to="">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
};

export default App;
