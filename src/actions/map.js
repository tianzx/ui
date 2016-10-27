/**
 * Created by tianzx on 2016/10/25.
 */
import api from '../api';
export const FETCH_MAP_ERROR = "FETCH_MAP_ERROR";
export const FETCH_MAP_SUCCESS = "FETCH_MAP_SUCCESS";
export const FETCH_MAP_PENDING = "FETCH_MAP_PENDING";
export const RETRIEVE_MAP_ERROR = "RETRIEVE_MAP_ERROR";
export const RETRIEVE_MAP_PENDING = "RETRIEVE_MAP_PENDING";
export const RETRIEVE_MAP_SUCCESS = "RETRIEVE_MAP_SUCCESS";

export function retrieveMap(data) {
  "use strict";
  return {
    type: 'RETRIEVE_MAP',
    payload: {
      promise: api.post('/map', {
        data: {
          sn: data.sn,
          startTime: data.startTime,
          endTime: data.endTime
        }
      })
    }
  };
}
