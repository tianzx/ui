/**
 * Created by tianzx on 16/8/26.
 */
import api from '../api'

import {getCookie} from '../utils';

export const FETCH_FENCE_PENDING = 'FETCH_FENCE_PENDING';
export const FETCH_FENCE_SUCCESS = 'FETCH_FENCE_SUCCESS';
export const FETCH_FENCE_ERROR = 'FETCH_FENCE_ERROR';
export const ADD_FENCE = 'ADD_FENCE';
export const EDIT_FENCE = 'EDIT_FENCE';
export const SUBMIT_FENCE_PENDING = 'SUBMIT_FENCE_PENDING';
export const SUBMIT_FENCE_SUCCESS = 'SUBMIT_FENCE_SUCCESS';
export const SUBMIT_FENCE_ERROR = 'SUBMIT_FENCE_ERROR';

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

export function addFence() {
    return {
        type: ADD_FENCE,
        payload:{
            status:"add"
        }
    }
}

export function editFence(id){
    "use strict";
    return {
        type:EDIT_FENCE,
        payload:{
            promise:api.post('/fence/`id`',{
            }),
        }
    }
}
export function submitFence(data){
    console.log(data);
    return {
        type: 'SUBMIT_FENCE',
        payload:{
            promise: api.post('/fence',{
                data:{
                    fenceName:data.fenceName,
                    agreement:data.agreement
                }
            }),
        }
    }
}