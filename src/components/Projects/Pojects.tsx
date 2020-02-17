import React from 'react';

import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';

import './Projects.scss';

import MainLayout from '@Components/MainLayout/MainLayout';
import PageTitle from '@Components/PageTitle/PageTitle';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';

import {
    enableMainLoaderAction,
    disableMainLoaderAction
} from '@Shared/constants';

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
    // 'https://api.github.com/users/itsSayantan/repos'
    const projectsContext = React.useContext(AppContext) as AppContextType;
    React.useEffect(() => {
        projectsContext?.dispatch({ type: enableMainLoaderAction });

        fetch('https://api.github.com/users/itsSayantan/repos')
            .then(data => data.json())
            .then(jsonData => {
                projectsContext?.dispatch({
                    type: disableMainLoaderAction
                });
            });
    }, []);

    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const mainLoaderState = appContext?.state?.AppState?.mainLoader;
                const isLoaderEnabled = mainLoaderState?.enabled;
                const projectsContext = appContext?.state?.AppTheme?.Projects;
                const projectsStyles = projectsContext?.projectsStyles;

                const projectContent = isLoaderEnabled ? (
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
