import api from '../api';

export const GET_ALL_MENU = 'GET_ALL_MENU';
export const GET_ALL_MENU_SUCCESS = 'GET_ALL_MENU_SUCCESS';
export const UPDATE_NAVPATH = 'UPDATE_NAVPATH';
export const FETCH_NAVPATH = 'FETCH_NAVPATH';
export const FETCH_NAVPATH_SUCCESS = 'FETCH_NAVPATH_SUCCESS';

export function updateNavPath(path, key) {
    return {
        type: UPDATE_NAVPATH,
        payload: {
            data: path,
            key: key
        }
    };
}

export function getAllMenu() {
    return {
        type: GET_ALL_MENU,
        payload: {
            promise: api.post('/menu')
        }
    };
}

export function fetchNavPath(url) {
    return {
        type: FETCH_NAVPATH,
        payload: {
            promise: api.get('/nav/' + url)
        }
    };

}
