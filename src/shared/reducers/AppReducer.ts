import { StateType, ActionType } from '@Shared/types/reducer';

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action?.type) {
        default:
            return state;
            break;
    }
};

export { reducer, StateType, ActionType };
