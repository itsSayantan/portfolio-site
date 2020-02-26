import {
    ContentLoadingIndicatorPropsType,
    LoaderAreaStyleType,
    LoaderBarStyleType,
    MobileMenuPropsType,
    MainHeaderPropsType,
    HomePropsType,
    PostPropsType,
    AboutPropsType,
    ProjectsPropsType,
    ProjectsDataPropsType,
    TimeLinePropsType
} from '@Shared/types/props';

import { AppStateType, PostDataType } from '@Shared/types/others';

export type StateType = {
    AppTheme: {
        MainLoader: LoaderAreaStyleType & LoaderBarStyleType;
        ContentLoadingIndicator: ContentLoadingIndicatorPropsType;
        MobileMenu: MobileMenuPropsType;
        MainHeader: MainHeaderPropsType;
        Home: HomePropsType;
        Post: PostPropsType;
        About: AboutPropsType;
        Projects: ProjectsPropsType;
    };
    AppState: AppStateType;
    ProjectsData: ProjectsDataPropsType;
    TimeLineData: TimeLinePropsType;
    PostData: PostDataType;
};
export type ActionType = {
    type: string;
    payload?: any;
};
