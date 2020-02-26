import React from 'react';

import MainLayout from '@Components/MainLayout/MainLayout';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';
import PageTitle from '@Components/PageTitle/PageTitle';
import GlobalFooter from '@Components/GlobalFooter/GlobalFooter';

import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';

import Big from '@Images/big-image.jpeg';
import LinkedIn from '@Images/linkedin.svg';
import Github from '@Images/github.svg';

import './About.scss';

const About = (props: any) => {
    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const aboutContext = appContext?.state?.AppTheme?.About;
                const aboutStyles = aboutContext?.aboutStyles;
                return (
                    <>
                        <MainLayout>
                            <>
                                <div className="about-wrapper">
                                    <PageTitle
                                        text="About"
                                        textColor={
                                            aboutStyles?.pageTitle?.color
                                        }
                                        fontSize={
                                            aboutStyles?.pageTitle?.fontSize
                                        }
                                    />
                                    <div className="about-image-area">
                                        <ContentLoadingIndicator
                                            width="100%"
                                            height="100%"
                                            borderRadius="100%"
                                            marginBottom="15px"
                                        >
                                            <img
                                                src={Big}
                                                alt="Sayantan Ghosh Big Image"
                                                className="about-image"
                                            />
                                        </ContentLoadingIndicator>
                                    </div>
                                    <div className="about-social">
                                        <div className="about-social-items">
                                            <a href="https://www.linkedin.com/in/itssayantan/">
                                                <img
                                                    src={LinkedIn}
                                                    alt="LinkedIn Logo"
                                                    width="20px"
                                                    height="20px"
                                                />
                                            </a>
                                            <a href="https://github.com/itsSayantan">
                                                <img
                                                    src={Github}
                                                    alt="Github Logo"
                                                    width="20px"
                                                    height="20px"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="about-work">
                                        Software Engineer at Impact Analytics
                                    </div>
                                    <div className="about-description">
                                        Interested in Javascript and React.JS on
                                        the frontend and Node.JS on the backend.
                                        Currently getting my hands dirty in
                                        React Native. Love to keep myself busy
                                        in interesting hobby projects that can
                                        be found on my{' '}
                                        <a
                                            style={{ color: 'rgb(0, 83, 144)' }}
                                            href="https://github.com/itsSayantan"
                                        >
                                            Github profile
                                        </a>
                                        .
                                    </div>
                                </div>
                            </>
                        </MainLayout>
                        <GlobalFooter />
                    </>
                );
            }}
        </AppContext.Consumer>
    );
};

export default About;
