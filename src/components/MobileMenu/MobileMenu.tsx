import React from 'react';
import { Link } from 'react-router-dom';

import { MobileMenuPropsType } from './model';

import './MobileMenu.scss';

const MobileMenu = (props: MobileMenuPropsType) => {
    return (
        <div className="mobile-menu-wrapper">
            <div className="mobile-menu-item-container">
                <div className="mobile-menu-item">
                    <Link to="/">About</Link>
                </div>
                <div className="mobile-menu-item">
                    <Link to="/projects">Projects</Link>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
