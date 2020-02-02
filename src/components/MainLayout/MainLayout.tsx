import React from 'react';

import { MainLayoutPropsType } from './model';

import './MainLayout.scss';

const MainLayout = (props: MainLayoutPropsType) => {
    return <div className="main-layout-wrapper">{props.children}</div>;
};

export default MainLayout;
