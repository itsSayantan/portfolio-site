import {
    ContentLoadingIndicatorPropsType,
    LoaderAreaStyleType,
    LoaderBarStyleType,
    MobileMenuPropsType,
    MainHeaderPropsType,
    AboutPropsType,
    ProjectsPropsType
} from '@Shared/types/props';

import { AppStateType, ProjectsDataType } from '@Shared/types/others';

export type StateType = {
    AppTheme: {
        MainLoader: LoaderAreaStyleType & LoaderBarStyleType;
        ContentLoadingIndicator: ContentLoadingIndicatorPropsType;
        MobileMenu: MobileMenuPropsType;
        MainHeader: MainHeaderPropsType;
        About: AboutPropsType;
        Projects: ProjectsPropsType;
    };
    AppState: AppStateType;
    ProjectsData: ProjectsDataType;
};
export type ActionType = {
    type: string;
    payload?: any;
};
