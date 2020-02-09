import React from 'react';

import MainLayout from '@Components/MainLayout/MainLayout';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';

import './About.scss';

const AboutContentLoadingOverlay = () => {
    return (
        <>
            <ContentLoadingIndicator
                width="50px"
                height="50px"
                borderRadius="100%"
                marginBottom="15px"
            />
            <ContentLoadingIndicator />
            <ContentLoadingIndicator />
        </>
    );
};

const About = (props: any) => {
    return (
        <>
            <MainLayout>
                <>
                    <div className="about-wrapper">
                        <AboutContentLoadingOverlay />
                    </div>
                </>
            </MainLayout>
        </>
    );
};

export default About;
