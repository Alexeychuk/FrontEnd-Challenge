import React from 'react';
import { StyledPost, StyledHeadline, StyledBody } from './StyledSinglePost';
import CommentsBlock from '../CommentsBlock/CommentsBlock';

const SinglePost = ({ id, posts, comments }) => {
    const currentItem = posts.find(post => post.id === id);
    return (
        <StyledPost>
            <StyledHeadline>{currentItem.title}</StyledHeadline>
            <StyledBody>{currentItem.body}</StyledBody>
            <CommentsBlock comments={comments} />
        </StyledPost>
    );
};

export default SinglePost;
