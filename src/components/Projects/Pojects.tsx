import React from 'react';

import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';

import './Projects.scss';

import MainLayout from '@Components/MainLayout/MainLayout';
import PageTitle from '@Components/PageTitle/PageTitle';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';

const ProjectsLoaderView = () => {
    return (
        <div
            style={{
                marginTop: '10px',
                width: '100%',
                height: '150px'
            }}
        >
            <ContentLoadingIndicator />
            <ContentLoadingIndicator />
            <ContentLoadingIndicator />
        </div>
    );
};

const Projects = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    // 'https://api.github.com/users/itsSayantan/repos'

    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const projectsContext = appContext?.state?.AppTheme?.Projects;
                const projectsStyles = projectsContext?.projectsStyles;

                const projectContent = isLoading ? (
                    <ProjectsLoaderView />
                ) : (
                    <>
                        <div className="projects-item"></div>
                        <div className="projects-item"></div>
                    </>
                );

                return (
                    <MainLayout>
                        <>
                            <div className="projects-wrapper">
                                <PageTitle
                                    text="Projects"
                                    textColor={projectsStyles?.pageTitle?.color}
                                    fontSize={
                                        projectsStyles?.pageTitle?.fontSize
                                    }
                                />
                                <div className="projects-items-wrapper">
                                    {projectContent}
                                </div>
                            </div>
                        </>
                    </MainLayout>
                );
            }}
        </AppContext.Consumer>
    );
};

export default Projects;
