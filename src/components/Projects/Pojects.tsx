import React from 'react';

import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';

import './Projects.scss';

import MainLayout from '@Components/MainLayout/MainLayout';
import PageTitle from '@Components/PageTitle/PageTitle';

const Projects = () => {
    // 'https://api.github.com/users/itsSayantan/repos'

    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const projectsContext = appContext?.state?.AppTheme?.Projects;
                const projectsStyles = projectsContext?.projectsStyles;
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
                                    <div className="projects-item"></div>
                                    <div className="projects-item"></div>
                                    <div className="projects-item"></div>
                                    <div className="projects-item"></div>
                                    <div className="projects-item"></div>
                                    <div className="projects-item"></div>
                                    <div className="projects-item"></div>
                                    <div className="projects-item"></div>
                                    <div className="projects-item"></div>
                                    <div className="projects-item"></div>
                                    <div className="projects-item"></div>
                                    <div className="projects-item"></div>
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
