import React from 'react';

import { AppContextType } from '@Shared/types/others';
import { AppContext } from '@Shared/contexts/AppContext';

import './MainLoader.scss';

// The default styling for this component will be taken from the global state

const MainLoader = () => {
    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const isLoaderEnabled =
                    appContext?.state?.AppState?.mainLoader?.enabled;
                const loaderAreaStyle = {
                    backgroundColor:
                        appContext?.state?.AppTheme?.MainLoader
                            ?.loaderAreaBackgroundColor,
                    display: isLoaderEnabled ? 'block' : 'none'
                };
                const loaderBarStyle = {
                    backgroundColor:
                        appContext?.state?.AppTheme?.MainLoader
                            ?.loaderBarBackgroundColor,
                    boxShadow:
                        appContext?.state?.AppTheme?.MainLoader
                            ?.loaderBarBoxShadow
                };

                return (
                    <div className="mainloader-wrapper" style={loaderAreaStyle}>
                        <div
                            className="mainloader-loader"
                            style={loaderBarStyle}
                        ></div>
                    </div>
                );
            }}
        </AppContext.Consumer>
    );
};

export default MainLoader;
