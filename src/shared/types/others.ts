import { StateType, ActionType } from '@Shared/reducers/AppReducer';

export type AppContextType = {
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
};