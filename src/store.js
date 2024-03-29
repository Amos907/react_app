import {createStore , applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';

const initialState = {}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,

    compose(
        // wraps around the enhancers required ... 
        applyMiddleware(... middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;