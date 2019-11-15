import { combineReducers } from 'redux';

import { REQUEST_SELECT_POST_SUCCESS } from './actions';
import { REQUEST_POSTS_SUCCESS } from '../Posts/actions';

function selectedReducer(state = [], action) {
    switch (action.type) {
        case REQUEST_SELECT_POST_SUCCESS: {
            return action.data;
        }
        case REQUEST_POSTS_SUCCESS: {
            return [];
        }
        default:
            return state;
    }
}

export default selectedReducer;
