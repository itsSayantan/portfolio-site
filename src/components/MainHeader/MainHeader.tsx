import React from 'react';
import { Link } from 'react-router-dom';

import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';

import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';
import { openMobileMenuAction } from '@Shared/constants';

import Small from '@Images/small-image.jpeg';

import './MainHeader.scss';

const MainHeader = () => {
    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const mainHeaderStyles =
                    appContext?.state?.AppTheme?.MainHeader?.headerStyles;

                const wrapperStyle = {
                    backgroundColor: mainHeaderStyles?.backgroundColor
                };

                const dotStyle = {
                    backgroundColor: mainHeaderStyles?.color
                };

                const menuNavItems = appContext?.state?.AppTheme?.MainHeader?.menuItems.map(
                    (m, i) => {
                        return (
                            <Link
                                className="menu-nav-item"
                                to={m?.link}
                                style={{
                                    color: mainHeaderStyles?.color,
                                    textDecoration: 'none'
                                }}
                                key={i}
                            >
                                {m?.text}
                            </Link>
                        );
                    }
                );
                return (
                    <div className="main-header-wrapper">
                        <div className="main-header-left-content">
                            <div className="main-header-left-content-image-area">
                                <ContentLoadingIndicator
                                    borderRadius="100%"
                                    height="100%"
                                    marginBottom="0"
                                >
                                    <img
                                        src={Small}
                                        alt="Sayantan Ghosh Small Image"
                                        width="100%"
                                        height="100%"
                                        className="main-header-left-content-image"
                                    />
                                </ContentLoadingIndicator>
                            </div>
                            <div className="main-header-left-content-text">
                                Sayantan Ghosh
                            </div>
                        </div>
                        <div
                            className="menu-button-wrapper"
                            onClick={() =>
                                appContext?.dispatch({
                                    type: openMobileMenuAction
                                })
                            }
                            style={wrapperStyle}
                        >
                            <div
                                className="menu-button-dot"
                                style={dotStyle}
                            ></div>
                            <div
                                className="menu-button-dot"
                                style={dotStyle}
                            ></div>
                            <div
                                className="menu-button-dot"
                                style={dotStyle}
                            ></div>
                        </div>
                        <div className="menu-nav-wrapper">{menuNavItems}</div>
                    </div>
                );
            }}
        </AppContext.Consumer>
    );
};

export default MainHeader;
