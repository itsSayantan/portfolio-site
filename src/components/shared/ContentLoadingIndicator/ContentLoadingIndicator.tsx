import React from 'react';

import { ContentLoadingIndicatorPropsType } from '@Shared/types/props';
import { AppContextType } from '@Shared/types/others';
import { AppContext } from '@Shared/contexts/AppContext';

import './ContentLoadingIndicator.scss';

// The default styling for this component will be taken from the global state
// However it can be configured by passing props

const ContentLoadingIndicator = (props: ContentLoadingIndicatorPropsType) => {
    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const style = {
                    width:
                        props?.width ||
                        appContext?.state?.AppTheme?.ContentLoadingIndicator
                            ?.width,
                    height:
                        props?.height ||
                        appContext?.state?.AppTheme?.ContentLoadingIndicator
                            ?.height,
                    backgroundColor:
                        props?.backgroundColor ||
                        appContext?.state?.AppTheme?.ContentLoadingIndicator
                            ?.backgroundColor,
                    borderRadius:
                        props?.borderRadius ||
                        appContext?.state?.AppTheme?.ContentLoadingIndicator
                            ?.borderRadius,
                    marginBottom:
                        props?.marginBottom ||
                        appContext?.state?.AppTheme?.ContentLoadingIndicator
                            ?.marginBottom
                };
                return (
                    <div
                        className="content-loading-indicator-wrapper"
                        style={style}
                    ></div>
                );
            }}
        </AppContext.Consumer>
    );
};

export default ContentLoadingIndicator;
