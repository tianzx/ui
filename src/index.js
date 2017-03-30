import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);

// import React from 'react'
// import ReactDOM from 'react-dom'
//
// import {createStore, combineReducers, applyMiddleware} from 'redux'
// import Provider from 'react-redux'
//
// import createHistory from 'history/createBrowserHistory';
// import Route from 'react-router';
//
// import ConnectedRouter from 'react-router-redux';
// import {routerMiddleware} from 'react-router-redux';
// import {routerReducer} from 'react-router-redux';
//
// import reducers from './reducers/index' // Or wherever you keep your reducers
//
// import routes from './routes';
// // Create a history of your choosing (we're using a browser history in this case)
// const history = createHistory()
//
// // Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history)
//
// // Add the reducer to your store on the `router` key
// // Also apply our middleware for navigating
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer
//   }),
//   applyMiddleware(middleware)
// )
//
// ReactDOM.render(
//   <Provider store={store}>
//     { /* ConnectedRouter will use the store from Provider automatically */ }
//     <ConnectedRouter history={history}>
//       <routes/>
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root')
// )
