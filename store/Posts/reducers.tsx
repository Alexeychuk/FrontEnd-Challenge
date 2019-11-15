import { combineReducers } from 'redux';

import {
    REQUEST_POSTS_START,
    REQUEST_POSTS_SUCCESS,
    REQUEST_NEW_POST_START,
    REQUEST_NEW_POST_SUCCESS,
    REQUEST_DELETE_POST_START,
    REQUEST_DELETE_POST_SUCCESS,
} from './actions';

function itemsReducer(state = [], action) {
    switch (action.type) {
        case REQUEST_POSTS_SUCCESS: {
            return action.posts;
        }

        case REQUEST_DELETE_POST_SUCCESS: {
            return state.filter(post => post.id !== action.data.id);
        }
        default:
            return state;
    }
}

function isFetchingReducer(state = false, action) {
    switch (action.type) {
        case REQUEST_POSTS_START:
        case REQUEST_NEW_POST_START:
        case REQUEST_DELETE_POST_START:
            return true;

        case REQUEST_POSTS_SUCCESS:
        case REQUEST_NEW_POST_SUCCESS:
        case REQUEST_DELETE_POST_SUCCESS:
            return false;

        default:
            return state;
    }
}

export default combineReducers({ items: itemsReducer, isFetching: isFetchingReducer });
