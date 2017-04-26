/**
 * Created by tianzx on 16/8/17.
 */
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
// import promiseMiddleware from '../middlewares/promiseMiddleware';
import promiseMiddleware from 'redux-promise-middleware';

const router = routerMiddleware(browserHistory);

const enhancer = compose(
    applyMiddleware(thunk, promiseMiddleware({promiseTypeSuffixes:['PENDING','SUCCESS','ERROR']}), router),
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer,
        initialState, enhancer
    );
    return store;
}
