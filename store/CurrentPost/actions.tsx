import axios from 'axios';
// ========================= ACTIONS
export const REQUEST_SELECT_POST_START = 'REQUEST_SELECT_POSTS_START';
export const REQUEST_SELECT_POST_SUCCESS = 'REQUEST_SELECT_POSTS_SUCCESS';

// ========================= DISPATCHERS
export const dispatchSelectedPost = id => {
    return async dispatch => {
        dispatch({
            type: REQUEST_SELECT_POST_START,
        });
        const res = await axios(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
        dispatch({
            type: REQUEST_SELECT_POST_SUCCESS,
            data: res.data.comments,
        });
    };
};
