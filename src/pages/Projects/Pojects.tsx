import React from 'react';

import { AppContext } from '@Shared/contexts/AppContext';
import { ProjectsDataPropsType, ProjectsPropsType } from '@Shared/types/props';
import { AppContextType } from '@Shared/types/others';

import './Projects.scss';

import MainLayout from '@Components/MainLayout/MainLayout';
import PageTitle from '@Components/PageTitle/PageTitle';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';

import {
    enableMainLoaderAction,
    disableMainLoaderAction,
    setProjectsDataAction,
    githubFetchProjectsUrl
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

const ProjectsData = React.memo((props: ProjectsDataPropsType) => {
    if (props?.data instanceof Array) {
        return (
            <>
                {props?.data.map(pd => {
                    return (
                        <div className="projects-item" key={pd?.id}>
                            <div className="projects-item-title">
                                <a href={pd?.html_url} target="_blank">
                                    {pd?.name}
                                </a>
                            </div>
                            <div className="projects-item-description">
                                {pd?.description}
                            </div>
                        </div>
                    );
                })}
            </>
        );
    } else {
        // data is not present or corrupted
        return <></>;
    }
});

const Projects = (props: ProjectsPropsType) => {
    const { state, dispatch } = React.useContext(AppContext) as AppContextType;
    React.useEffect(() => {
        dispatch({ type: enableMainLoaderAction });

        fetch(githubFetchProjectsUrl)
            .then(data => data.json())
            .then(jsonData => {
                dispatch({
                    type: setProjectsDataAction,
                    payload: jsonData
                });
                dispatch({
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
                const projectsData = appContext?.state?.ProjectsData;

                const projectContent = isLoaderEnabled ? (
                    <ProjectsLoaderView />
                ) : (
                    <ProjectsData data={projectsData} />
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
