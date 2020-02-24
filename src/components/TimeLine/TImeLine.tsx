import React from 'react';
import { Link } from 'react-router-dom';

import { TimeLinePropsType } from '@Shared/types/props';

import './TimeLine.scss';

const TimeLine = (props: TimeLinePropsType) => {
    return (
        <div className="timeline-wrapper">
            {props?.timeLineItems.map(t => {
                return (
                    <div className="timeline-box" key={t?.id}>
                        <div className="timeline-header">{t?.header}</div>
                        <div className="timeline-item-container">
                            {t?.items.map(ti => {
                                return (
                                    <div className="timeline-item" key={ti?.id}>
                                        <Link to={ti?.link}>{ti?.text}</Link>
                                        <div className="timeline-item-date">
                                            {ti?.date}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TimeLine;
