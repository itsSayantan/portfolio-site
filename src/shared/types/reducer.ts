import {
    ContentLoadingIndicatorPropsType,
    LoaderAreaStyleType,
    LoaderBarStyleType,
    MobileMenuPropsType,
    MainHeaderPropsType,
    HomePropsType,
    AboutPropsType,
    ProjectsPropsType,
    ProjectsDataPropsType,
    TimeLinePropsType
} from '@Shared/types/props';

import { AppStateType } from '@Shared/types/others';

export type StateType = {
    AppTheme: {
        MainLoader: LoaderAreaStyleType & LoaderBarStyleType;
        ContentLoadingIndicator: ContentLoadingIndicatorPropsType;
        MobileMenu: MobileMenuPropsType;
        MainHeader: MainHeaderPropsType;
        Home: HomePropsType;
        About: AboutPropsType;
        Projects: ProjectsPropsType;
    };
    AppState: AppStateType;
    ProjectsData: ProjectsDataPropsType;
    TimeLineData: TimeLinePropsType;
};
export type ActionType = {
    type: string;
    payload?: any;
};
