import { StateType, ActionType } from '@Shared/types/reducer';

const createInitialState = (initialState: Array<string>): StateType => {
    return {
        // something that should be your initial state
    };
};

const reducer = (state: StateType, action: ActionType) => {
    // switch case statement to handle redux style reducer logic
};

export { createInitialState, reducer, StateType, ActionType };
