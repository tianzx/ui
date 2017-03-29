/**
 * Created by tianzx on 2017/3/22.
 */
import api from '../../api';
import * as base from '../base';

/**
 * get list
 * @type {string}
 */
export const FETCH_FILE_PENDING = 'FETCH_FILE_PENDING';
export const FETCH_FILE_SUCCESS = 'FETCH_FILE_SUCCESS';
export const FETCH_FILE_ERROR = 'FETCH_FILE_ERROR';
export const FETCH_FILE = 'FETCH_FILE';
export const EDIT_FILE = 'EDIT_FILE';
export const EDIT_COMMIT_LOG = 'EDIT_COMMIT_LOG';
export const EDIT_COMMIT_LOG_FILE = 'EDIT_COMMIT_LOG_FILE';
/**
 * get one detail
 * @type {string}
 */
export const RETRIEVE_FILE_PENDING = 'RETRIEVE_FILE_PENDING';
export const RETRIEVE_FILE_SUCCESS = 'RETRIEVE_FILE_SUCCESS';
export const RETRIEVE_FILE_ERROR = 'RETRIEVE_FILE_ERROR';
export const UPDATE_FILE_PENDING = 'UPDATE_FILE_PENDING';
export const UPDATE_FILE_SUCCESS = 'UPDATE_FILE_SUCCESS';
export const UPDATE_FILE_ERROR = 'UPDATE_FILE_ERROR';
export const DELETE_FILE_PENDING = 'DELETE_FENCE_PENDING';
export const DELETE_FILE_SUCCESS = 'DELETE_FENCE_SUCCESS';
export const DELETE_FILE_ERROR = 'DELETE_FENCE_ERROR';
export const EDIT_COMMITLOG_PENDING = 'EDIT_COMMITLOG_PENDING';
export const EDIT_COMMITLOG_SUCCESS = 'EDIT_COMMITLOG_SUCCESS';
export const EDIT_COMMITLOG_ERROR = 'EDIT_COMMITLOG_ERROR';


/**
 * lauch a get method to fetch json data
 * @param data
 * @returns {{type: string, payload: {promise}}}
 */
export function fetchFiles(data = {field: "", keyword: "", current: 1}) {

  const {field, keyword} = data;

  // console.log(data.field + '' + data.keyword + data.current);

  return {
    type: FETCH_FILE,
    payload: {
      promise: api.get('/file/fota' + '?' + 'field=' + field + '&' + 'keyword=' + keyword)
    }
  };
}

/**
 *
 * @returns {{type: string, payload: {status}}}
 */
export function editFile() {
  return {
    type: EDIT_FILE,
    payload: {
      status: base.EDIT
    }
  };
}

export function editCommitLogFile() {
  return {
    type: EDIT_COMMIT_LOG_FILE,
    payload : {
      status: base.MODEL
    }
  }
}

export function updateFile(data) {
  "use strict";
  return {
    type: 'UPDATE_FILE',
    payload: {
      promise: api.put('/file', {
        data: {
          id: data.id,
          fenceName: data.fenceName,
          agreement: data.agreement
        }
      })
    }
  };
}

export function deleteFile(id) {
  "use strict";
  return {
    type: 'DELETE_FILE',
    payload: {
      promise: api.del('/file/' + id)
    }
  };
}

export function editCommitLog(id) {
  "use strict";
  return {
    type: 'EDIT_COMMIT_LOG',
    payload: {
      promise: api.get('/file/commitLog/' + id)
    }
  }

}
