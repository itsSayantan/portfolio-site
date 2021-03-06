import React from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '@Components/MainLayout/MainLayout';
import GlobalFooter from '@Components/GlobalFooter/GlobalFooter';

import { disableMainLoaderAction } from '@Shared/constants';

import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';

import './PageNotFound.scss';

const PageNotFound = () => {
    const { state, dispatch } = React.useContext(AppContext) as AppContextType;

    React.useEffect(() => {
        dispatch({ type: disableMainLoaderAction });
    }, []);

    return (
        <>
            <MainLayout>
                <>
                    <div className="page-not-found-wrapper">
                        <div className="page-not-found-header-text">404</div>
                        <div className="page-not-found-text">
                            Page not found. Click <Link to="/">here</Link> to go
                            to the home page.
                        </div>
                    </div>
                </>
            </MainLayout>
            <GlobalFooter />
        </>
    );
};

export default PageNotFound;
