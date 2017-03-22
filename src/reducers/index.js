/**
 * Created by tianzx on 16/8/17.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from './login';
import menus from './menu';
import fences from './fence';
import maps from './map';
import files from './business/file';

const rootReducer = combineReducers({
    routing: routerReducer,
    menus,
    login,
    fences,
    maps,
    files
});

export default rootReducer;
