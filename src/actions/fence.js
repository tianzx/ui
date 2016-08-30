/**
 * Created by tianzx on 16/8/26.
 */
import api from '../api'

import {getCookie} from '../utils';

export const FETCH_FENCE_PENDING = 'FETCH_FENCE_PENDING';
export const FETCH_FENCE_SUCCESS = 'FETCH_FENCE_SUCCESS';
export const FETCH_FENCE_ERROR = 'FETCH_FENCE_ERROR';


export function fetchFences() {
    let uid = getCookie('smartauto-token');

    if (uid === undefined) {
        return {type: 'UID_NOT_FOUND'};
    }

    return {
        type: 'FETCH_FENCE',
        payload: {
            promise: api.post('/fence')
        }
    }
}
