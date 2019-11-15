import { combineReducers } from 'redux';

import Posts from './Posts/reducers';
import Comments from './CurrentPost/reducers';

export const intitialState = {
    posts: {
        isFetching: false,
        items: [],
    },
    comments: [],
};

export default combineReducers({
    posts: Posts,
    comments: Comments,
});
