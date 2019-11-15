import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Post from '../../containers/Post/Post';
import StyledList from './StyledList';

const Posts = ({ posts, isFetching = false }) => {
    return (
        <StyledList>
            {isFetching ? (
                <div>...Loading</div>
            ) : (
                posts.map(post => <Post key={post.id} title={post.title} body={post.body} id={post.id} />)
            )}
        </StyledList>
    );
};

export default Posts;

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            body: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ).isRequired,
    isFetching: PropTypes.bool,
};
