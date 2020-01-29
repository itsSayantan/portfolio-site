import React from 'react';

import { ReactLoadingCardPropsType } from './model';

import './ReactLoadingCard.scss';

const ReactLoadingCard = (props: ReactLoadingCardPropsType) => {
    return (
        <div className="react-loading-card-wrapper">
            <div className="react-loading-card-text">
                <div className="react-loading-overlay"></div>
            </div>
            <div className="react-loading-card-description">
                <div className="react-loading-overlay"></div>
            </div>
        </div>
    );
};

export default ReactLoadingCard;
