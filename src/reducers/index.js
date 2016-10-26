/**
 * Created by tianzx on 16/8/17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from './login';
import menus from './menu';
import fences from './fence';
import maps from './map'

const rootReducer = combineReducers({
    routing: routerReducer,
    menus,
    login,
    fences,
    maps
});

export default rootReducer;
