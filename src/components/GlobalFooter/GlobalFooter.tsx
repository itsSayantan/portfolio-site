import React from 'react';

import './GlobalFooter.scss';

const GlobalFooter = () => {
    return (
        <div className="global-footer-wrapper">
            <div className="global-footer-copyright-text">
                Copyright &copy; Sayantan Ghosh
            </div>
            <div className="version-number">v1.1.1</div>
        </div>
    );
};

export default GlobalFooter;
