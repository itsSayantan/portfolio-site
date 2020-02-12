import React from 'react';

import MainLayout from '@Components/MainLayout/MainLayout';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';
import PageTitle from '@Components/PageTitle/PageTitle';

import Big from '@Images/big-image.jpeg';
import LinkedIn from '@Images/linkedin.svg';
import Github from '@Images/github.svg';

import './About.scss';

const About = (props: any) => {
    return (
        <>
            <MainLayout>
                <>
                    <div className="about-wrapper">
                        <PageTitle text="About" />
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quisquam repudiandae iste nisi officiis.
                            Veniam, deleniti animi nisi nemo reiciendis atque,
                            officiis voluptates recusandae corrupti libero
                            harum, inventore id et impedit.
                        </div>
                    </div>
                </>
            </MainLayout>
        </>
    );
};

export default About;
