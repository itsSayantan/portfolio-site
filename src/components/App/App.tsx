import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import MainLoader from '@Components/shared/MainLoader/MainLoader';
import MobileMenu from '@Components/MobileMenu/MobileMenu';
import MainHeader from '@Components/MainHeader/MainHeader';

const About = React.lazy(() => import('@Components/About/About'));

const App: React.FC = (props: any) => {
    const menuItems = [
        { text: 'About', link: '/' },
        { text: 'Projects', link: '/projects' }
    ];
    return (
        <BrowserRouter>
            <MainHeader />
            <MainLoader />
            {/* <MobileMenu menuItems={menuItems} open={false} /> */}
            <React.Suspense fallback={<h3>Loading...</h3>}>
                <Switch>
                    <Route path="/" component={About} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
};

export default App;
