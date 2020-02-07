import { StateType, ActionType } from '@Shared/types/reducer';

import { openMobileMenuAction, closeMobileMenuAction } from '@Shared/constants';

const createInitialState = (initialState: StateType) => {
    return initialState;
};

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action?.type) {
        case openMobileMenuAction: {
            return {
                ...state,
                AppTheme: {
                    ...state.AppTheme,
                    MobileMenu: {
                        ...state.AppTheme.MobileMenu,
                        open: true
                    }
                }
            };
        }
        case closeMobileMenuAction: {
            return {
                ...state,
                AppTheme: {
                    ...state.AppTheme,
                    MobileMenu: {
                        ...state.AppTheme.MobileMenu,
                        open: false
                    }
                }
            };
        }
        default:
            return state;
    }
};

export { reducer, StateType, ActionType, createInitialState };
