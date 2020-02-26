import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import MainLayout from '@Components/MainLayout/MainLayout';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';
import PageTitle from '@Components/PageTitle/PageTitle';

import { AppContext } from '@Shared/contexts/AppContext';
import {
    AppContextType,
    PostNotFoundType,
    PostDataResponseType
} from '@Shared/types/others';
import {
    getPostByIDEndpoint,
    setPostDataAction,
    enableMainLoaderAction,
    disableMainLoaderAction
} from '@Shared/constants';

import BackButton from '@Images/back-button.svg';

import './Post.scss';

const PostLoaderView = () => {
    return (
        <div style={{ width: '100%', height: '150px', marginTop: '10px' }}>
            <ContentLoadingIndicator />
            <ContentLoadingIndicator />
            <ContentLoadingIndicator />
        </div>
    );
};

const Post = (props: any) => {
    const { state, dispatch } = React.useContext(AppContext) as AppContextType;
    const { postID } = useParams();
    const history = useHistory();

    React.useEffect(() => {
        dispatch({ type: enableMainLoaderAction });
        fetch(getPostByIDEndpoint + '/' + postID)
            .then(response => {
                if (response.status === 404) {
                    return {
                        postNotFound: true
                    };
                }
                return response.json();
            })
            .then((jsonData: PostDataResponseType | PostNotFoundType) => {
                if ((jsonData as PostNotFoundType)?.postNotFound) {
                    // redirect to the /404 page
                    history.push('/404');
                } else {
                    // set the post data state
                    const jd = jsonData as PostDataResponseType;

                    dispatch({
                        type: setPostDataAction,
                        payload: jd?.data
                    });

                    dispatch({ type: disableMainLoaderAction });
                }
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: disableMainLoaderAction });
            });
    }, []);

    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const mainLoaderState = appContext?.state?.AppState?.mainLoader;
                const isLoaderEnabled = mainLoaderState?.enabled;
                const postContext = appContext?.state?.AppTheme?.Post;
                const postStyles = postContext?.postStyles;
                const postData = appContext?.state?.PostData;

                const postContent = isLoaderEnabled ? (
                    <PostLoaderView />
                ) : (
                    <div className="post-content-container">
                        <div className="post-header">{postData?.header}</div>
                        <div className="post-date">{postData?.date}</div>
                        <ReactMarkdown
                            source={postData?.content}
                            escapeHtml={false}
                        />
                    </div>
                );

                return (
                    <MainLayout>
                        <>
                            <div className="post-wrapper">
                                <PageTitle>
                                    <Link
                                        to="/"
                                        style={{
                                            color: postStyles?.pageTitle?.color,
                                            fontSize:
                                                postStyles?.pageTitle?.fontSize,
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <div className="post-page-title-section">
                                            <img
                                                src={BackButton}
                                                className="post-page-title-back-button-image"
                                            />
                                            Home
                                        </div>
                                    </Link>
                                </PageTitle>
                                {postContent}
                            </div>
                        </>
                    </MainLayout>
                );
            }}
        </AppContext.Consumer>
    );
};

export default Post;
