import React from 'react';
import { Link } from 'react-router-dom';

import { closeMobileMenuAction } from '@Shared/constants';
import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';

import './MobileMenu.scss';

import CloseButton from '@Images/close-button.svg';

const MobileMenu = () => {
    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                return (
                    <div
                        className="mobile-menu-wrapper"
                        style={{
                            display: appContext?.state?.AppTheme?.MobileMenu
                                ?.open
                                ? 'flex'
                                : 'none'
                        }}
                    >
                        <div
                            className="mobile-menu-close-button"
                            onClick={() =>
                                appContext?.dispatch({
                                    type: closeMobileMenuAction
                                })
                            }
                        >
                            <img src={CloseButton} alt="Close Button" />
                        </div>
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
            }}
        </AppContext.Consumer>
    );
};

export default MobileMenu;
