import React from 'react';

import './GlobalFooter.scss';

const GlobalFooter = () => {
    return (
        <div className="global-footer-wrapper">
            <div className="global-footer-copyright-text">
                Copyright &copy; 2020
            </div>
            <div className="version-number">v1.0.0</div>
        </div>
    );
};

export default GlobalFooter;
