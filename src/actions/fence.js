/**
 * Created by tianzx on 16/8/26.
 */
import api from '../api'

import {getCookie} from '../utils';

export const FETCH_FENCE_PENDING = 'FETCH_FENCE_PENDING';
export const FETCH_FENCE_SUCCESS = 'FETCH_FENCE_SUCCESS';
export const FETCH_FENCE_ERROR = 'FETCH_FENCE_ERROR';
export const EDIT_FENCE = 'EDIT_FENCE';
export const LIST = "LIST_PAGE";
export const ADD = "ADD_PAGE";
export const EDIT = "EDIT_PAGE";
export const CREATE_FENCE_PENDING = 'CREATE_FENCE_PENDING';
export const CREATE_FENCE_SUCCESS = 'CREATE_FENCE_SUCCESS';
export const CREATE_FENCE_ERROR = 'CREATE_FENCE_ERROR';
export const RETRIEVE_FENCE_PENDING = 'RETRIEVE_FENCE_PENDING';
export const RETRIEVE_FENCE_SUCCESS = 'RETRIEVE_FENCE_SUCCESS';
export const RETRIEVE_FENCE_ERROR = 'RETRIEVE_FENCE_ERROR';
export const UPDATE_FENCE_PENDING = 'UPDATE_FENCE_PENDING';
export const UPDATE_FENCE_SUCCESS = 'UPDATE_FENCE_SUCCESS';
export const UPDATE_FENCE_ERROR = 'UPDATE_FENCE_ERROR';
export const DELETE_FENCE_PENDING = 'DELETE_FENCE_PENDING';
export const DELETE_FENCE_SUCCESS = 'DELETE_FENCE_SUCCESS';
export const DELETE_FENCE_ERROR = 'DELETE_FENCE_ERROR';

export function fetchFences() {
    let uid = getCookie('smartauto-token');

    if (uid === undefined) {
        return {type: 'UID_NOT_FOUND'};
    }

    return {
        type: 'FETCH_FENCE',
        payload: {
            promise: api.get('/fence')
        }
    }
}

export function editFence(status) {
    return {
        type: EDIT_FENCE,
        payload: {
            status: ADD
        }
    }
}

export function createFence(data) {
    return {
        type: 'CREATE_FENCE',
        payload: {
            promise: api.post('/fence', {
                data: {
                    fenceName: data.fenceName,
                    agreement: data.agreement
                }
            }),
        }
    }
}
export function retrieveFence(id) {
    "use strict";
    return {
        type: 'RETRIEVE_FENCE',
        payload: {
            promise: api.get("/fence/" + id),
        }
    }
}

export function updateFence(data) {
    "use strict";
    return {
        type: 'UPDATE_FENCE',
        payload: {
            promise: api.put('/fence', {
                data: {
                    fenceName: data.fenceName,
                    agreement: data.agreement
                }
            })
        }
    }
}

export function deleteFence(id) {
    "use strict";
    return {
        type: 'DELETE_FENCE',
        payload: {
            promise: api.delete('/fence/'+id)
        }
    }
}

