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
                        appContext?.AppTheme?.ContentLoadingIndicator?.width,
                    height:
                        props?.height ||
                        appContext?.AppTheme?.ContentLoadingIndicator?.height,
                    backgroundColor:
                        props?.backgroundColor ||
                        appContext?.AppTheme?.ContentLoadingIndicator
                            ?.backgroundColor,
                    borderRadius:
                        props?.borderRadius ||
                        appContext?.AppTheme?.ContentLoadingIndicator
                            ?.borderRadius,
                    marginBottom:
                        props?.marginBottom ||
                        appContext?.AppTheme?.ContentLoadingIndicator
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
