import React from 'react';

import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';

import { openMobileMenuAction } from '@Shared/constants';

import './MainHeader.scss';

const MainHeader = () => {
    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                return (
                    <div className="main-header-wrapper">
                        <button
                            onClick={() =>
                                appContext?.dispatch({
                                    type: openMobileMenuAction
                                })
                            }
                        >
                            Open MobileMenu
                        </button>
                    </div>
                );
            }}
        </AppContext.Consumer>
    );
};

export default MainHeader;
