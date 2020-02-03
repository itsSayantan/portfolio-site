import { StateType, ActionType } from '@Shared/reducers/AppReducer';

export type AppContextType = StateType & React.Dispatch<ActionType>;
