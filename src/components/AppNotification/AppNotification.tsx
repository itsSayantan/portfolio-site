import React from 'react';

import {
    AppContextType,
    AppNotificationStateType,
    AppNotificationCloseHandlerType
} from '@Shared/types/others';

import { setAppNotificationDataAction } from '@Shared/constants';

import { AppContext } from '@Shared/contexts/AppContext';

import CloseButton from '@Images/close-button.svg';

import './AppNotification.scss';

const AppNotificationContent = React.memo(
    (props: AppNotificationStateType & AppNotificationCloseHandlerType) => {
        let content = <></>;

        const compouteStyles = (props: AppNotificationStateType) => {
            const t = props?.type;
            const s = props?.styles;

            return ['info', 'warn', 'error', 'success'].indexOf(t) === -1
                ? {}
                : (s as any)[t];
        };

        const s = compouteStyles(props);

        if (props?.message.trim().length !== 0) {
            content = (
                <div className="app-notification-content" style={...s}>
                    <div className="app-notification-message-section">
                        <div className="app-notification-message">
                            {props?.message}
                        </div>
                    </div>
                    <div className="app-notification-close">
                        <img
                            src={CloseButton}
                            alt="Close Button"
                            onClick={() =>
                                props?.onCloseAppNotification(
                                    props?.message,
                                    props?.type
                                )
                            }
                        />
                    </div>
                </div>
            );
        }

        return content;
    }
);

const AppNotification = () => {
    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const appNotificationState =
                    appContext?.state?.AppState?.appNotification;

                const closeAppNotificationHandler = (
                    message: string,
                    type: string
                ) => {
                    appContext?.dispatch({
                        type: setAppNotificationDataAction,
                        payload: { message, type }
                    });
                };

                return (
                    <div className="app-notification-wrapper">
                        <AppNotificationContent
                            styles={appNotificationState?.styles}
                            message={appNotificationState?.message}
                            type={appNotificationState?.type}
                            onCloseAppNotification={() =>
                                closeAppNotificationHandler('', 'info')
                            }
                        />
                    </div>
                );
            }}
        </AppContext.Consumer>
    );
};

export default AppNotification;
