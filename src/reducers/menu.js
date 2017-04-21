import _ from 'lodash';

import {
    GET_ALL_MENU_SUCCESS,
    UPDATE_NAVPATH,
    FETCH_NAVPATH_SUCCESS
} from '../actions/menu';

const initialState = {
    currentIndex: 0,
    items: [],
    navpath: []
};

function getNavPath(state,action) {
    let navpath = [], tmpOb, tmpKey, child;
    if (action.payload.data) {
        // console.log(action.payload.data);
        action.payload.data.reverse().map((item)=> {
            if (item.indexOf('sub') != -1) {
                tmpKey = item.replace('sub', '');
                tmpOb = collection.find(state.items, function (o) {
                    return o.key == tmpKey;
                });
                child = tmpOb.child;
                navpath.push({
                    key: tmpOb.key,
                    name: tmpOb.name
                });
            }
            if (item.indexOf('menu') != -1) {
                tmpKey = item.replace('menu', '');
                if (child) {
                    tmpOb = _.find(child, function (o) {
                        return o.key == tmpKey;
                    });
                }
                navpath.push({
                    key: tmpOb.key,
                    name: tmpOb.name
                });
            }
        });
    }
    return navpath;
}
export default function menu(state = initialState, action = {}) {
    switch (action.type) {
        case GET_ALL_MENU_SUCCESS:
            return Object.assign({}, initialState, {items: action.payload.menus});
        case UPDATE_NAVPATH:
            return Object.assign({}, state, {
                currentIndex: action.payload.key * 1,
                navpath: getNavPath(state,action)
            });
        case FETCH_NAVPATH_SUCCESS:
            return Object.assign({}, state, {
                navpath: getNavPath(state,action)
            });
        default:
            return state;
    }
}
