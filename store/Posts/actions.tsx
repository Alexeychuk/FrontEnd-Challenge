import axios from 'axios';
// ========================= ACTIONS
export const REQUEST_POSTS_START = 'REQUEST_POSTS_START';
export const REQUEST_POSTS_SUCCESS = 'REQUEST_POSTS_SUCCESS';

export const REQUEST_NEW_POST_START = 'REQUEST_NEW_POST_START';
export const REQUEST_NEW_POST_SUCCESS = 'REQUEST_NEW_POST_SUCCESS';

export const REQUEST_DELETE_POST_START = 'REQUEST_DELETE_POST_START';
export const REQUEST_DELETE_POST_SUCCESS = 'REQUEST_DELETE_POST_SUCCESS';

// ========================= DISPATCHERS
export const dispatchRequestPosts = () => {
    return async dispatch => {
        dispatch({
            type: REQUEST_POSTS_START,
        });
        const res = await axios.get(`https://simple-blog-api.crew.red/posts`);
        dispatch({
            type: REQUEST_POSTS_SUCCESS,
            posts: res.data,
        });
    };
};

export const dispatchNewPost = (title, body) => {
    return async dispatch => {
        dispatch({
            type: REQUEST_NEW_POST_START,
        });
        const res = await axios.post(`https://simple-blog-api.crew.red/posts`, { title, body });
        //console.log(res)
        dispatch({
            type: REQUEST_NEW_POST_SUCCESS,
            data: res,
        });
    };
};

export const dispatchDeletePost = id => dispatch => {
    dispatch({
        type: REQUEST_DELETE_POST_START,
    });
    axios
        .delete(`https://simple-blog-api.crew.red/posts/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));

    //  dispatch({
    //     type: REQUEST_DELETE_POST_SUCCESS,
    //     data: res.data,
    // })
};

// export const dispatchDeletePost = id => {
//     return async dispatch => {
//         try{
//              dispatch({
//             type: REQUEST_DELETE_POST_START,
//         });
//         console.log(`https://simple-blog-api.crew.red/posts/${id}`);
//         const res = await axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);
//         console.log(res);
//         dispatch({
//             type: REQUEST_DELETE_POST_SUCCESS,
//             data: res.data,
//         });
//         } catch (error){
//             console.log(error)
//         }

//     };
// };
