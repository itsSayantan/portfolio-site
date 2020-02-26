import { StateType, ActionType } from '@Shared/types/reducer';

import {
    openMobileMenuAction,
    closeMobileMenuAction,
    enableMainLoaderAction,
    disableMainLoaderAction,
    setProjectsDataAction,
    setTimeLineDataAction,
    setPostDataAction
} from '@Shared/constants';

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
        case enableMainLoaderAction: {
            return {
                ...state,
                AppTheme: {
                    ...state.AppTheme
                },
                AppState: {
                    ...state.AppState,
                    mainLoader: {
                        ...state.AppState.mainLoader,
                        enabled: true
                    }
                }
            };
        }
        case disableMainLoaderAction: {
            return {
                ...state,
                AppTheme: {
                    ...state.AppTheme
                },
                AppState: {
                    ...state.AppState,
                    mainLoader: {
                        ...state.AppState.mainLoader,
                        enabled: false
                    }
                }
            };
        }
        case setProjectsDataAction: {
            return {
                ...state,
                ProjectsData: {
                    ...state?.ProjectsData,
                    data: action?.payload
                }
            };
        }
        case setTimeLineDataAction: {
            return {
                ...state,
                TimeLineData: {
                    ...state?.TimeLineData,
                    data: action?.payload
                }
            };
        }
        case setPostDataAction: {
            return {
                ...state,
                PostData: action?.payload
            };
        }
        default:
            return state;
    }
};

export { reducer, StateType, ActionType, createInitialState };
