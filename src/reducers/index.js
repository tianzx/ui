/**
 * Created by tianzx on 16/8/17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './user';
import menus from './menu'

const rootReducer = combineReducers({
    routing: routerReducer,
    menus,
    users
});

export default rootReducer;
