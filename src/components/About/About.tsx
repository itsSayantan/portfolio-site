import React from 'react';

import MainLayout from '@Components/MainLayout/MainLayout';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';

const About = (props: any) => {
    return (
        <>
            <MainLayout>
                <>
                    <div
                        style={{
                            position: 'relative',
                            top: '100px',
                            left: '5%',
                            width: 'calc(90% - 22px)',
                            height: '120px',
                            padding: '10px',
                            border: '1px solid black'
                        }}
                    >
                        <ContentLoadingIndicator
                            width="50px"
                            height="50px"
                            borderRadius="100%"
                            marginBottom="15px"
                        />
                        <ContentLoadingIndicator />
                        <ContentLoadingIndicator />
                    </div>
                </>
            </MainLayout>
        </>
    );
};

export default About;
