import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import MainLayout from '@Components/MainLayout/MainLayout';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';
import PageTitle from '@Components/PageTitle/PageTitle';

import { AppContext } from '@Shared/contexts/AppContext';
import { AppContextType } from '@Shared/types/others';

import './Post.scss';

const Post = (props: any) => {
    const { postID } = useParams();

    const s =
        'I created this portfolio of mine primarily to learn more about web development and also to create a habit of writing down whatever I learn.\n\nI think that the best way to start now is my writing the posts in a markdown file. This is because of two reasons:\n\n- This removes much of the complexity of creating the entire blog-like structure.\n- Updating the posts becomes easy, though this is not recommended.\n\nThis method might change in the future.\n\nI am still figuring out a way to provide feedback for these posts but it is not on priority right now.\n\n<h6 align="center">\n<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRTE3RDsiIGN4PSIyNTYuMDAxIiBjeT0iMjU2IiByPSIyNTYiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkQxNjQ7IiBkPSJNMjkzLjE2Miw0NzQuODM5Yy0xNDEuMzg1LDAtMjU2LTExNC42MTUtMjU2LTI1NmMwLTYxLjIyNywyMS41MjEtMTE3LjQxMSw1Ny4zNzYtMTYxLjQ2Mw0KCQlDMzYuODY0LDEwNC4zMTYsMC4wMDEsMTc1Ljg0MiwwLjAwMSwyNTZjMCwxNDEuMzg1LDExNC42MTUsMjU2LDI1NiwyNTZjODAuMTU5LDAsMTUxLjY4NS0zNi44NjQsMTk4LjYyNi05NC41MzgNCgkJQzQxMC41NzQsNDUzLjMxNywzNTQuMzksNDc0LjgzOSwyOTMuMTYyLDQ3NC44Mzl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDE2NDsiIGQ9Ik0xODEuNjc4LDUxMkwxODEuNjc4LDUxMmM5LjA4NCwwLDE2LjUxNi03LjQzMiwxNi41MTYtMTYuNTE2bDAsMA0KCQljMC05LjA4NC03LjQzMi0xNi41MTYtMTYuNTE2LTE2LjUxNmwwLDBoOC4yNThsMCwwYzkuMDg0LDAsMTYuNTE2LTcuNDMyLDE2LjUxNi0xNi41MTZsMCwwYzAtOS4wODQtNy40MzItMTYuNTE2LTE2LjUxNi0xNi41MTYNCgkJbDAsMGg4LjI1OGM5LjA4NCwwLDE2LjUxNi03LjQzMiwxNi41MTYtMTYuNTE2bDAsMGMwLTkuMDg0LTcuNDMyLTE2LjUxNi0xNi41MTYtMTYuNTE2aDkwLjgzOWM5LjEyMiwwLDE2LjUxNi03LjM5NSwxNi41MTYtMTYuNTE2DQoJCWwwLDBjMC05LjEyMi03LjM5NS0xNi41MTYtMTYuNTE2LTE2LjUxNkgxNDAuMzg4Yy0xMy42ODIsMC0yNC43NzQtMTEuMDkyLTI0Ljc3NC0yNC43NzRWMzA1LjU1DQoJCWMwLTkuMTIyLTcuMzk1LTE2LjUxNi0xNi41MTYtMTYuNTE2bDAsMGMtOS4xMjIsMC0xNi41MTYsNy4zOTUtMTYuNTE2LDE2LjUxNnY0MC40MjZjMCwxMS4yNTEtMy44MjksMjIuMTY3LTEwLjg1OCwzMC45NTMNCgkJbC03LjY5OCw5LjYyMmMtOS4zNzEsMTEuNzE0LTE0LjQ3NywyNi4yNjktMTQuNDc3LDQxLjI3djM0LjYzMmMwLDI3LjM2NSwyMi4xODQsNDkuNTQ4LDQ5LjU0OCw0OS41NDhoODIuNTgxVjUxMnoiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkMzNTA7IiBkPSJNMTk4LjE5NSw0OTUuNDg0aC0xNi41MTZIOTkuMDk4Yy0xOC4yMTQsMC0zMy4wMzItMTQuODE4LTMzLjAzMi0zMy4wMzJ2LTM0LjYzMw0KCQljMC0xMS4yMDgsMy44NTYtMjIuMjAxLDEwLjg1Ny0zMC45NTJsNy42OTktOS42MjJjOS4zMzUtMTEuNjY5LDE0LjQ3Ni0yNi4zMjYsMTQuNDc2LTQxLjI3di01Ni45NDINCgkJYy05LjEyMSwwLTE2LjUxNiw3LjM5NS0xNi41MTYsMTYuNTE2djQwLjQyNmMwLDExLjI1MS0zLjgyOSwyMi4xNjctMTAuODU3LDMwLjk1M2wtNy42OTgsOS42MjINCgkJYy05LjM3MSwxMS43MTQtMTQuNDc3LDI2LjI2OS0xNC40NzcsNDEuMjd2MzQuNjMzYzAsMjcuMzY1LDIyLjE4Myw0OS41NDgsNDkuNTQ4LDQ5LjU0OGg4Mi41ODENCgkJQzE5MC43NjIsNTEyLDE5OC4xOTUsNTA0LjU2OCwxOTguMTk1LDQ5NS40ODR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQzM1MDsiIGQ9Ik0zMDUuNTQ5LDM5Ni4zODdIMTg5LjkzNmMtNC41NjEsMC04LjI1OCwzLjY5Ny04LjI1OCw4LjI1OGMwLDQuNTYsMy42OTcsOC4yNTgsOC4yNTgsOC4yNThoOC4yNTgNCgkJaDkwLjgzOUMyOTguMTU1LDQxMi45MDMsMzA1LjU0OSw0MDUuNTA5LDMwNS41NDksMzk2LjM4N3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZDMzUwOyIgZD0iTTE3My40Miw0MzcuNjc3YzAsNC41NiwzLjY5Nyw4LjI1OCw4LjI1OCw4LjI1OGg4LjI1OGg4LjI1OGM5LjA4NCwwLDE2LjUxNi03LjQzMiwxNi41MTYtMTYuNTE2DQoJCWgtMzMuMDMyQzE3Ny4xMTcsNDI5LjQxOSwxNzMuNDIsNDMzLjExNiwxNzMuNDIsNDM3LjY3N3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZDMzUwOyIgZD0iTTE2NS4xNjIsNDcwLjcxYzAsNC41NiwzLjY5Nyw4LjI1OCw4LjI1OCw4LjI1OGg4LjI1OGg4LjI1OGM5LjA4NCwwLDE2LjUxNi03LjQzMiwxNi41MTYtMTYuNTE2DQoJCUgxNzMuNDJDMTY4Ljg1OSw0NjIuNDUyLDE2NS4xNjIsNDY2LjE0OSwxNjUuMTYyLDQ3MC43MXoiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNBQTczNDY7IiBkPSJNMjk3LjI3NSwzNDAuNjQ1Yy0xLjU1NiwwLTMuMTM3LTAuMzU1LTQuNjI5LTEuMTA1Yy0wLjU2NS0wLjI4Mi01Ny4xODYtMjguNDI3LTExOS43NzQtMjkuODYzDQoJCWMtNS43MDItMC4xMjktMTAuMjE4LTQuODU1LTEwLjA4OS0xMC41NTZjMC4xMjktNS42OTgsNC44NjMtMTAuNDE5LDEwLjU1Ni0xMC4wODFjNjcuMzg3LDEuNTQ0LDEyNi4xMzcsMzAuODIzLDEyOC42MDUsMzIuMDY5DQoJCWM1LjA4OSwyLjU2NSw3LjEyOSw4Ljc3LDQuNTY1LDEzLjg1OUMzMDQuNjk1LDMzOC41NjksMzAxLjA1NywzNDAuNjQ1LDI5Ny4yNzUsMzQwLjY0NXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojQUE3MzQ2OyIgZD0iTTE4OS45MjgsMTM0LjE5NGMtMi4yNSwwLTQuNTE2LTAuNzM0LTYuNDExLTIuMjQyYy0xLjU1Ni0xLjIyMi0zNy4wNjUtMjguNDcyLTc5LjgwNi03LjEwNQ0KCQljLTUuMDgxLDIuNTUyLTExLjMwNiwwLjQ3Ni0xMy44NDctNC42MTdjLTIuNTQ4LTUuMTAxLTAuNDg0LTExLjI5OCw0LjYyMS0xMy44NTFjNTQuODIzLTI3LjQzNSwxMDAuMDA4LDcuOTExLDEwMS45MDMsOS40MzENCgkJYzQuNDUyLDMuNTYsNS4xNjksMTAuMDU2LDEuNjEzLDE0LjUwOEMxOTUuOTYxLDEzMi44NjcsMTkyLjk2MSwxMzQuMTk0LDE4OS45MjgsMTM0LjE5NHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojQUE3MzQ2OyIgZD0iTTMwNS41NDEsMTUwLjcxNGMtNC44MjMsMC05LjEyOS0zLjM5NS0xMC4xMTMtOC4zMDJjLTEuMTIxLTUuNTg5LDIuNTA4LTExLjAyOCw4LjA5Ny0xMi4xNDUNCgkJbDgyLjU4MS0xNi41MTZjNS42MjEtMS4xMTcsMTEuMDI0LDIuNTA0LDEyLjE0NSw4LjA5N2MxLjEyMSw1LjU4OS0yLjUwOCwxMS4wMjgtOC4wOTcsMTIuMTQ1bC04Mi41ODEsMTYuNTE2DQoJCUMzMDYuODg4LDE1MC42NDUsMzA2LjIxMSwxNTAuNzE0LDMwNS41NDEsMTUwLjcxNHoiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM3RDUwNDY7IiBkPSJNMTUyLjAwNywyMDguMDE4TDE1Mi4wMDcsMjA4LjAxOGMtMTEuMzE2LTEuMzk1LTE5LjM1OS0xMS43LTE3Ljk2NC0yMy4wMTZsMi4wMjEtMTYuMzkyDQoJYzEuMzk1LTExLjMxNiwxMS43LTE5LjM1OSwyMy4wMTYtMTcuOTY0bDAsMGMxMS4zMTYsMS4zOTUsMTkuMzU5LDExLjcsMTcuOTY0LDIzLjAxNmwtMi4wMjEsMTYuMzkyDQoJQzE3My42MjgsMjAxLjM3LDE2My4zMjMsMjA5LjQxMywxNTIuMDA3LDIwOC4wMTh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojOUM2ODQ2OyIgZD0iTTE1OS4wOCwxNTAuNjQ2Yy0xLjQwNC0wLjE3My0yLjc5MS0wLjE5OC00LjE0OS0wLjA5MmwtMy40ODYsMjguMjczDQoJYy0wLjgzNyw2Ljc5LDMuOTg4LDEyLjk3MywxMC43NzgsMTMuODFzMTIuOTczLTMuOTg4LDEzLjgxLTEwLjc3OGwxLjAxMS04LjE5NkMxNzguNDM5LDE2Mi4zNDYsMTcwLjM5NywxNTIuMDQxLDE1OS4wOCwxNTAuNjQ2eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzdENTA0NjsiIGQ9Ik0zMjQuOTEsMjI2LjA4MkwzMjQuOTEsMjI2LjA4MmMtMTEuMzE2LTEuMzk1LTE5LjM1OS0xMS43LTE3Ljk2NC0yMy4wMTZsMi4wMjEtMTYuMzkyDQoJYzEuMzk1LTExLjMxNiwxMS43LTE5LjM1OSwyMy4wMTYtMTcuOTY0bDAsMGMxMS4zMTYsMS4zOTUsMTkuMzU5LDExLjcsMTcuOTY0LDIzLjAxNmwtMi4wMjEsMTYuMzkyDQoJQzM0Ni41MzEsMjE5LjQzNSwzMzYuMjI2LDIyNy40NzgsMzI0LjkxLDIyNi4wODJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojOUM2ODQ2OyIgZD0iTTMzMS45ODMsMTY4LjcxYy0xLjQwNC0wLjE3My0yLjc5MS0wLjE5OC00LjE0OS0wLjA5MmwtMy40ODYsMjguMjczDQoJYy0wLjgzNyw2Ljc5LDMuOTg4LDEyLjk3MywxMC43NzgsMTMuODFjNi43OSwwLjgzNywxMi45NzMtMy45ODgsMTMuODEtMTAuNzc4bDEuMDExLTguMTk2DQoJQzM1MS4zNDIsMTgwLjQxLDM0My4zLDE3MC4xMDYsMzMxLjk4MywxNjguNzF6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" width="100" height="100" />\n</h6>\n';

    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const postContext = appContext?.state?.AppTheme?.Post;
                const postStyles = postContext?.postStyles;

                const { header, date, content } = appContext?.state?.PostData;

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
                                        Home
                                    </Link>
                                </PageTitle>
                                <div className="post-content-container">
                                    <div className="post-header">{header}</div>
                                    <div className="post-date">{date}</div>
                                    <ReactMarkdown
                                        source={content}
                                        escapeHtml={false}
                                    />
                                </div>
                            </div>
                        </>
                    </MainLayout>
                );
            }}
        </AppContext.Consumer>
    );
};

export default Post;
