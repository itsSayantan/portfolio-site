import React from 'react';

import {
    AppContextType,
    AppNotificationStateType,
    AppNotificationCloseHandlerType,
    AppNotificationCloseButtonType
} from '@Shared/types/others';

import { setAppNotificationDataAction } from '@Shared/constants';

import { AppContext } from '@Shared/contexts/AppContext';

import CloseButton from '@Images/close-button.svg';

import './AppNotification.scss';

const AppNotificationCloseButton = React.memo(
    (props: AppNotificationCloseButtonType) => {
        const { state, dispatch } = React.useContext(
            AppContext
        ) as AppContextType;
        const closeButton = props?.closeButton?.customProperties;
        const styles = closeButton?.styles;

        const closeButtonClickHandler = (
            keepOpen: boolean,
            passedHandler: () => void
        ) => {
            if (keepOpen) {
                passedHandler();
            } else {
                dispatch({
                    type: setAppNotificationDataAction,
                    payload: { message: '', type: 'info' }
                });
                passedHandler();
            }
        };

        return (
            <div
                className="app-notification-custom-close-button"
                style={{
                    backgroundColor: styles?.backgroundColor,
                    color: styles?.color
                }}
                onClick={() =>
                    closeButtonClickHandler(
                        closeButton?.keepOpen,
                        closeButton?.onClick
                    )
                }
            >
                {closeButton?.text}
            </div>
        );
    }
);

const AppNotificationContent = React.memo(
    (
        props: AppNotificationStateType &
            AppNotificationCloseHandlerType &
            AppNotificationCloseButtonType
    ) => {
        let content = <></>;

        const compouteStyles = (props: AppNotificationStateType) => {
            const t = props?.type;
            const s = props?.styles;

            return ['info', 'warn', 'error', 'success'].indexOf(t) === -1
                ? {}
                : (s as any)[t];
        };

        const s = compouteStyles(props);

        const closeButtonContent = props?.closeButton?.customProperties ? (
            <AppNotificationCloseButton closeButton={props?.closeButton} />
        ) : (
            <img
                src={CloseButton}
                alt="Close Button"
                onClick={() =>
                    props?.onCloseAppNotification(props?.message, props?.type)
                }
            />
        );

        if (props?.message.trim().length !== 0) {
            content = (
                <div
                    className="app-notification-content"
                    style={{
                        backgroundColor: s?.backgroundColor,
                        color: s?.color
                    }}
                >
                    <div className="app-notification-message-section">
                        <div className="app-notification-message">
                            {props?.message}
                        </div>
                    </div>
                    <div className="app-notification-close">
                        {closeButtonContent}
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

                const closeButtonProps = appNotificationState?.closeButton;

                return (
                    <div className="app-notification-wrapper">
                        <AppNotificationContent
                            styles={appNotificationState?.styles}
                            message={appNotificationState?.message}
                            type={appNotificationState?.type}
                            onCloseAppNotification={() =>
                                closeAppNotificationHandler('', 'info')
                            }
                            closeButton={closeButtonProps}
                        />
                    </div>
                );
            }}
        </AppContext.Consumer>
    );
};

export default AppNotification;
