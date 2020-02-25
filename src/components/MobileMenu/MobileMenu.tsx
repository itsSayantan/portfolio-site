import React from 'react';
import { Link } from 'react-router-dom';

import { closeMobileMenuAction } from '@Shared/constants';
import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';
import { MobileMenuItemsPropsType } from '@Shared/types/props';

import './MobileMenu.scss';

import CloseButton from '@Images/close-button.svg';

const MobileMenuItems = React.memo((props: MobileMenuItemsPropsType) => {
    if (!(props?.menuItems instanceof Array)) {
        return <></>;
    } else {
        return (
            <>
                {props?.menuItems.map(m => (
                    <div
                        className="mobile-menu-item"
                        style={{ borderBottom: props?.borderBottom }}
                        key={m?.id}
                    >
                        <Link
                            to={m?.link}
                            style={{
                                color: props?.color
                            }}
                            onClick={props.onLinkClick}
                        >
                            {m?.text}
                        </Link>
                    </div>
                ))}
            </>
        );
    }
});

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
                            <MobileMenuItems
                                menuItems={mobileMenuState?.menuItems}
                                color={mobileMenuState?.menuStyles?.item?.color}
                                borderBottom={
                                    mobileMenuState?.menuStyles?.item
                                        ?.borderBottom
                                }
                                onLinkClick={() => {
                                    appContext?.dispatch({
                                        type: closeMobileMenuAction
                                    });
                                }}
                            />
                        </div>
                    </div>
                );
            }}
        </AppContext.Consumer>
    );
};

export default MobileMenu;
