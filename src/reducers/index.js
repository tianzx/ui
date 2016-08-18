/**
 * Created by tianzx on 16/8/17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from './login';
import menus from './menu'

const rootReducer = combineReducers({
    routing: routerReducer,
    menus,
    login
});

export default rootReducer;
