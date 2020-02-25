import React from 'react';
import { useParams } from 'react-router-dom';

import './Post.scss';

const Post = (props: any) => {
    const { postID } = useParams();

    // use postID to call API to get information about the post

    return <div>Post</div>;
};

export default Post;
