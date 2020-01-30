import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLoader from '@Components/shared/MainLoader/MainLoader';

import './App.scss';
import MobileMenu from '@Components/MobileMenu/MobileMenu';

const About = React.lazy(() => import('@Components/About/About'));

const App: React.FC = (props: any) => {
    const menuItems = [
        { text: 'About', link: '/' },
        { text: 'Projects', link: '/projects' }
    ];
    return (
        <BrowserRouter>
            <MainLoader />
            <MobileMenu menuItems={menuItems} />
            <React.Suspense fallback={<h3>Loading...</h3>}>
                <Switch>
                    <Route path="/" component={About} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
};

export default App;
