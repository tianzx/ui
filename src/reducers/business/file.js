/**
 * Created by tianzx on 2017/3/22.
 */

import {
  FETCH_FILE_ERROR,
  FETCH_FILE_PENDING,
  FETCH_FILE_SUCCESS,
  EDIT_FILE,

  RETRIEVE_FILE_ERROR,
  RETRIEVE_FILE_PENDING,
  RETRIEVE_FILE_SUCCESS,
  UPDATE_FILE_ERROR,
  UPDATE_FILE_PENDING,
  UPDATE_FILE_SUCCESS,
  DELETE_FILE_SUCCESS,
  DELETE_FILE_PENDING,
  DELETE_FILE_ERROR
}from '../../actions/business/file'
import {
  LIST,
  EDIT,
} from '../../actions/base';

const initialState = {
  /**
   * list 的数据
   */
  data: [],
  /**
   * 存放分页数据
   */
  meta: {
    total: 0,
    current: 1,
    pageSize: 10
  },
  /**
   * 区分不同的状态
   */
  message: "",
  /**
   * 区分不同的页面
   * list、edit
   */
  status: LIST,
  /**
   * 单条fence数据
   */
  file: {},
  /**
   * search 传入数据
   */
  searchData: {},
};
export default function file(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_FILE_PENDING:
      return Object.assign({}, initialState, {message: "pending"});
    case FETCH_FILE_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload.files.data,
        meta: action.payload.files.meta,
        message: "success"
      });
    case FETCH_FILE_ERROR:
      return {
        ...state,
        files: null,
        message: action.payload.message
      };
    case EDIT_FILE:
      return Object.assign({}, state, {
        status: action.payload.status
      });
    // case CREATE_FENCE_SUCCESS:
    //   return Object.assign({}, initialState, {message: "success"});
    // case CREATE_FENCE_PENDING:
    //   return Object.assign({}, initialState, {message: "pending"});
    // case CREATE_FENCE_ERROR:
    //   return Object.assign({}, initialState, {message: "error"});
    case RETRIEVE_FILE_SUCCESS:
      return Object.assign({}, state, {
        file: action.payload.file,
        status: EDIT,
        message: "success"
      });
    case RETRIEVE_FILE_PENDING:
      return Object.assign({}, state, {message: "pending"});
    case RETRIEVE_FILE_ERROR:
      return Object.assign({}, state, {message: "error"});
    case DELETE_FILE_SUCCESS:
      return Object.assign({}, state, {
        message: action.payload.success
      });
    case DELETE_FILE_PENDING:
      return Object.assign({}, initialState, {message: "pending"});
    case DELETE_FILE_ERROR:
      return Object.assign({}, state, {message: "error"});
    default:
      return state;
  }
}
