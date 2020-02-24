import React from 'react';

import MainLayout from '@Components/MainLayout/MainLayout';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';
import PageTitle from '@Components/PageTitle/PageTitle';
import TimeLine from '@Components/TimeLine/TImeLine';

import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';
import { TimeLinePropsType } from '@Shared/types/props';

import './Home.scss';

const Home = (props: any) => {
    const dummyPosts: TimeLinePropsType = {
        timeLineItems: [
            {
                id: 1,
                header: '2020',
                items: [
                    {
                        id: 1,
                        date: '3rd Jan 2020',
                        link: '/asasasasas',
                        text:
                            'Article with some title. Article is called Post here btw.....'
                    },
                    {
                        id: 2,
                        date: '4th Feb 2020',
                        link: '/hmm',
                        text:
                            'Article with some title. Article is called Post here btw.....'
                    },
                    {
                        id: 3,
                        date: '3rd Mar 2020',
                        link: '/tetete',
                        text:
                            'Article with some title. Article is called Post here btw.....'
                    },
                    {
                        id: 4,
                        date: '4th Jan 2020',
                        link: '/uuuuu',
                        text:
                            'Article with some title. Article is called Post here btw.....'
                    }
                ]
            },
            {
                id: 2,
                header: '2019',
                items: [
                    {
                        id: 1,
                        date: '3rd Jan 2019',
                        link: '/asasasasas',
                        text:
                            'Article with some title. Article is called Post here btw.....'
                    },
                    {
                        id: 2,
                        date: '4th Feb 2019',
                        link: '/hmm',
                        text:
                            'Article with some title. Article is called Post here btw.....'
                    },
                    {
                        id: 3,
                        date: '3rd Mar 2019',
                        link: '/tetete',
                        text:
                            'Article with some title. Article is called Post here btw.....'
                    },
                    {
                        id: 4,
                        date: '4th Jan 2019',
                        link: '/uuuuu',
                        text:
                            'Article with some title. Article is called Post here btw.....'
                    }
                ]
            }
        ]
    };
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
                                <TimeLine
                                    timeLineItems={dummyPosts?.timeLineItems}
                                />
                            </div>
                        </>
                    </MainLayout>
                );
            }}
        </AppContext.Consumer>
    );
};

export default Home;
