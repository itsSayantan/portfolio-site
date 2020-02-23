import React from 'react';

import MainLayout from '@Components/MainLayout/MainLayout';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';
import PageTitle from '@Components/PageTitle/PageTitle';

import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';

import './Home.scss';

const Home = (props: any) => {
    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const homeContext = appContext?.state?.AppTheme?.Home;
                const homeStyles = homeContext?.homeStyles;
                return (
                    <MainLayout>
                        <>
                            <div className="home-wrapper">
                                <PageTitle
                                    text="Home"
                                    textColor={homeStyles?.pageTitle?.color}
                                    fontSize={homeStyles?.pageTitle?.fontSize}
                                />
                                Page content yet to be finalized
                            </div>
                        </>
                    </MainLayout>
                );
            }}
        </AppContext.Consumer>
    );
};

export default Home;
