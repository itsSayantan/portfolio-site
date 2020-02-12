import React from 'react';

import { PageTitlePropsType } from './model';

import './PageTitle.scss';

// This component can display the static text sent in the props or the children element(s) that are provided to it.
// If both are provided, the children is given more preference.

const PageTitle = (props: PageTitlePropsType) => {
    let content: JSX.Element = <></>;
    if (props?.children) {
        content = props?.children;
    } else if (props?.text) {
        content = <div>{props?.text}</div>;
    } else {
        throw new Error(
            `PageTitle component needs a 'text' or a 'chidlren' prop`
        );
    }
    return <p>{content}</p>;
};

export default PageTitle;
