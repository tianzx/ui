
/**
 * Created by tianzx on 16/8/17.
 */

import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';
import {createLogger} from 'redux-logger';
// import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
// import promiseMiddleware from '../middlewares/promiseMiddleware';
import promiseMiddleware from 'redux-promise-middleware';

const logger = createLogger();
const router = routerMiddleware(browserHistory);

const enhancer = compose(
  applyMiddleware(promiseMiddleware({promiseTypeSuffixes:['PENDING','SUCCESS','ERROR']}), logger, router),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer,
    initialState, enhancer
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
