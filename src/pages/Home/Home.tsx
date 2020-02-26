import React from 'react';

import MainLayout from '@Components/MainLayout/MainLayout';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';
import PageTitle from '@Components/PageTitle/PageTitle';
import TimeLine from '@Components/TimeLine/TImeLine';

import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';

import './Home.scss';

import {
    enableMainLoaderAction,
    disableMainLoaderAction,
    setTimeLineDataAction,
    githubFetchTimeLineItemsUrl
} from '@Shared/constants';

const HomeLoaderView = () => {
    return (
        <div style={{ width: '100%', height: '150px', marginTop: '10px' }}>
            <ContentLoadingIndicator />
            <ContentLoadingIndicator />
            <ContentLoadingIndicator />
        </div>
    );
};

const Home = (props: any) => {
    const { state, dispatch } = React.useContext(AppContext) as AppContextType;
    React.useEffect(() => {
        dispatch({ type: enableMainLoaderAction });

        fetch(githubFetchTimeLineItemsUrl)
            .then(data => data.json())
            .then(jsonData => {
                dispatch({
                    type: setTimeLineDataAction,
                    payload: jsonData
                });
                dispatch({
                    type: disableMainLoaderAction
                });
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: disableMainLoaderAction });
            });
    }, []);

    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const mainLoaderState = appContext?.state?.AppState?.mainLoader;
                const homeContext = appContext?.state?.AppTheme?.Home;
                const homeStyles = homeContext?.homeStyles;
                const isLoaderEnabled = mainLoaderState?.enabled;
                const timeLineData = appContext?.state?.TimeLineData?.data;

                const homeContent = isLoaderEnabled ? (
                    <HomeLoaderView />
                ) : (
                    <TimeLine data={timeLineData} />
                );

                return (
                    <MainLayout>
                        <>
                            <div className="home-wrapper">
                                <PageTitle
                                    text="Home"
                                    textColor={homeStyles?.pageTitle?.color}
                                    fontSize={homeStyles?.pageTitle?.fontSize}
                                />
                                {homeContent}
                            </div>
                        </>
                    </MainLayout>
                );
            }}
        </AppContext.Consumer>
    );
};

export default Home;
