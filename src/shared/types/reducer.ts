import {
    ContentLoadingIndicatorPropsType,
    LoaderAreaStyleType,
    LoaderBarStyleType,
    MobileMenuPropsType
} from '@Shared/types/props';

export type StateType = {
    AppTheme: {
        MainLoader: LoaderAreaStyleType & LoaderBarStyleType;
        ContentLoadingIndicator: ContentLoadingIndicatorPropsType;
        MobileMenu: MobileMenuPropsType;
    };
};
export type ActionType = {
    type: string;
    payload?: any;
};
