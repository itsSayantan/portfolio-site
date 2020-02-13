import {
    ContentLoadingIndicatorPropsType,
    LoaderAreaStyleType,
    LoaderBarStyleType,
    MobileMenuPropsType,
    MainHeaderPropsType,
    AboutPropsType
} from '@Shared/types/props';

export type StateType = {
    AppTheme: {
        MainLoader: LoaderAreaStyleType & LoaderBarStyleType;
        ContentLoadingIndicator: ContentLoadingIndicatorPropsType;
        MobileMenu: MobileMenuPropsType;
        MainHeader: MainHeaderPropsType;
        About: AboutPropsType;
    };
};
export type ActionType = {
    type: string;
    payload?: any;
};
