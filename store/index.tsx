import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer, { intitialState } from './RootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export function configureStore(state = intitialState): any {
    const store = createStore(RootReducer, state, bindMiddleware([thunkMiddleware]));
    return store;
}

export default configureStore;
