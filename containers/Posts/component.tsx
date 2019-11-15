import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Posts from '../../components/Posts';

const PostsContainer = ({ posts, dispatchRequestPosts }) => {
    useEffect(() => {
        dispatchRequestPosts();
    }, []);

    return (
        <div>
            <Posts posts={posts} />
        </div>
    );
};

PostsContainer.propTypes = {
    dispatchRequestPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
};

export default PostsContainer;
