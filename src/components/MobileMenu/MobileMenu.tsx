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
                const mobileMenuState = appContext?.state?.AppTheme?.MobileMenu;
                return (
                    <div
                        className="mobile-menu-wrapper"
                        style={{
                            display: mobileMenuState?.open ? 'flex' : 'none',
                            backgroundColor:
                                mobileMenuState?.menuStyles?.wrapper
                                    ?.backgroundColor
                        }}
                    >
                        <div
                            className="mobile-menu-close-button"
                            onClick={() =>
                                appContext?.dispatch({
                                    type: closeMobileMenuAction
                                })
                            }
                            style={{
                                color:
                                    mobileMenuState?.menuStyles?.closeButton
                                        ?.color
                            }}
                        >
                            <img src={CloseButton} alt="Close Button" />
                        </div>
                        <div className="mobile-menu-item-container">
                            <div
                                className="mobile-menu-item"
                                style={{
                                    borderBottom:
                                        mobileMenuState?.menuStyles?.item
                                            ?.borderBottom
                                }}
                            >
                                <Link
                                    to="/"
                                    style={{
                                        color:
                                            mobileMenuState?.menuStyles?.item
                                                ?.color
                                    }}
                                >
                                    About
                                </Link>
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
