import React from 'react';

import MainLayout from '@Components/MainLayout/MainLayout';
import GlobalFooter from '@Components/GlobalFooter/GlobalFooter';

import './PwaFallback.scss';

const PwaFallback = () => {
    return (
        <>
            <MainLayout>
                <div className="pwa-fallback-wrapper">
                    <div className="pwa-fallback-header">Oops!</div>
                    <div className="pwa-fallback-text">
                        This page cannot be viewed in the offline mode. Please
                        make sure you have an internet connection and refresh
                        the page.
                    </div>
                </div>
            </MainLayout>
            <GlobalFooter />
        </>
    );
};

export default PwaFallback;
