import React from 'react';

import { LoaderAreaStyleType, LoaderBarStyleType } from './model';

import './MainLoader.scss';

const MainLoader = (props: LoaderAreaStyleType & LoaderBarStyleType) => {
    const loaderAreaStyle = {
        backgroundColor: props.loaderAreaBackgroundColor || '#efefef'
    };
    const loaderBarStyle = {
        backgroundColor: props.loaderBarBackgroundColor || 'coral',
        boxShadow: props.loaderBarBoxShadow || '0 0 1px 1px #777888'
    };

    return (
        <div className="global-mainloader-wrapper" style={loaderAreaStyle}>
            <div
                className="global-mainloader-loader"
                style={loaderBarStyle}
            ></div>
        </div>
    );
};

export default MainLoader;
