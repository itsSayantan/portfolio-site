import { StateType, ActionType } from '@Shared/reducers/AppReducer';

export type AppContextType = {
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
};

export type AppStateType = {
    mainLoader: {
        enabled: boolean;
    };
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
