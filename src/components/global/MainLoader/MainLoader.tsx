import React from 'react';

import {
    LoaderAreaStyleType,
    LoaderBarStyleType,
    MainLoaderPropsType
} from './model';

import './MainLoader.scss';

const MainLoader = (props: MainLoaderPropsType) => {
    const loaderAreaStyle: LoaderAreaStyleType = {};
    const loaderBarStyle: LoaderBarStyleType = {};

    if (props?.loaderAreaBackgroundColor) {
        loaderAreaStyle['backgroundColor'] = props.loaderAreaBackgroundColor;
    }

    if (props?.loaderHeight) {
        loaderAreaStyle['height'] = props.loaderHeight;
    }

    if (props?.loaderBarBackgroundColor) {
        loaderBarStyle['backgroundColor'] = props.loaderBarBackgroundColor;
    }

    if (props?.loaderBarShadowColor) {
        loaderBarStyle['boxShadow'] =
            '0 0 1px 1px ' + props.loaderBarBackgroundColor;
    }

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
