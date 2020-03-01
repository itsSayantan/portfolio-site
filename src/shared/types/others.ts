import { StateType, ActionType } from '@Shared/reducers/AppReducer';

export type AppContextType = {
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
};

export type AppNotificationStateType = {
    message: string;
    type: string; // info, warn, error, success
    styles?: {
        info: {
            backgroundColor: string;
            color: string;
        };
        warn: {
            backgroundColor: string;
            color: string;
        };
        error: {
            backgroundColor: string;
            color: string;
        };
        success: {
            backgroundColor: string;
            color: string;
        };
    };
};

export type AppStateType = {
    mainLoader: {
        enabled: boolean;
    };
    appNotification: AppNotificationStateType;
};

export type TimeLineBoxItemType = {
    id: number;
    text: string;
    link: string;
    date: string;
};

export type TimeLineBoxType = {
    id: number;
    header: string;
    items: Array<TimeLineBoxItemType>;
};

export type ProjectsDataType = any;

export type PostDataType = {
    header: string;
    date: string;
    content: string;
};

export type PostDataResponseType = {
    data: PostDataType;
};

export type PostNotFoundType = {
    postNotFound: boolean;
};

export type AppNotificationCloseHandlerType = {
    onCloseAppNotification: (message: string, type: string) => void;
};
