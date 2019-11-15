import React from 'react';
import { StyledCommentsBlock, StyledItem, StyledHeadline } from './StyledCommentsBlock';

interface CommentsItem {
    id: number;
    body: string;
    postId: number;
}

interface MyComponentProps {
    comments: Array<CommentsItem>;
}

const CommentsBlock: React.SFC<MyComponentProps> = ({ comments }): JSX.Element => {
    return (
        <>
            {comments.length !== 0 && <StyledHeadline>Comments block</StyledHeadline>}
            <StyledCommentsBlock>
                {comments.length === 0 ? (
                    <p>No comments yet...</p>
                ) : (
                    comments.map(comment => <StyledItem key={comment.id}>{comment.body}</StyledItem>)
                )}
            </StyledCommentsBlock>
        </>
    );
};

export default CommentsBlock;
