import React from 'react';

import { ContentLoadingIndicatorPropsType } from './model';

import './ContentLoadingIndicator.scss';

const ContentLoadingIndicator = (props: ContentLoadingIndicatorPropsType) => {
    const style = {
        width: props?.width || '100%',
        height: props?.height || '18px',
        backgroundColor: props?.backgroundColor || 'rgba(205, 205, 205, 0.42)',
        borderRadius: props?.borderRadius || '0',
        marginBottom: props?.marginBottom || '10px'
    };
    return (
        <div className="content-loading-indicator-wrapper" style={style}></div>
    );
};

export default ContentLoadingIndicator;
