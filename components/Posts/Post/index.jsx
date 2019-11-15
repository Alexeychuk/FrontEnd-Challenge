import React from 'react';
import Styledli from './StyledPostsItem';
import StyledContent from './StyledContent';
import Link from 'next/link';
// import StyledLink from './StyledLink';
// import StyledContent from './StyledContent';

import Button from '../../shared/Button';

// interface Props {
//     title:string,
//     body:string,
//     id:string,
//     dispatchDeletePost: any,
//     dispatchSelectedPost?: any,
// }

const PostsItem = ({ title, body, id, dispatchDeletePost, dispatchSelectedPost }) => {
    const handleDelete = e => {
        e.stopPropagation();
        dispatchDeletePost(id);
    };

    const handleSelect = e => {
        dispatchSelectedPost(id);
    };

    return (
        <Link href={{ pathname: '/posts/[id]', query: { id: id } }} as={`/posts/${id}`}>
            <Styledli>
                <StyledContent onClick={handleSelect}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <Button label="Delete" onClick={e => handleDelete(e)} />
                </StyledContent>
            </Styledli>
        </Link>
    );
};

export default PostsItem;
