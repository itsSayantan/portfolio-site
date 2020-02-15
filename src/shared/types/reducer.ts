import {
    ContentLoadingIndicatorPropsType,
    LoaderAreaStyleType,
    LoaderBarStyleType,
    MobileMenuPropsType,
    MainHeaderPropsType,
    AboutPropsType,
    ProjectsPropsType
} from '@Shared/types/props';

export type StateType = {
    AppTheme: {
        MainLoader: LoaderAreaStyleType & LoaderBarStyleType;
        ContentLoadingIndicator: ContentLoadingIndicatorPropsType;
        MobileMenu: MobileMenuPropsType;
        MainHeader: MainHeaderPropsType;
        About: AboutPropsType;
        Projects: ProjectsPropsType;
    };
};
export type ActionType = {
    type: string;
    payload?: any;
};
