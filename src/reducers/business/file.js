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
  DELETE_FILE_ERROR,
  EDIT_COMMIT_LOG,
  EDIT_COMMIT_LOG_PENDING,
  EDIT_COMMIT_LOG_SUCCESS,
  EDIT_COMMIT_LOG_ERROR,
  EDIT_COMMIT_LOG_FILE
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

  /**
   * 查看commit_log 数据
   */
  commit_log: "",

  /**
   * 模态窗口是否显示
   */
  model_status: false
};
export default function file(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_FILE_PENDING:
      return Object.assign({}, initialState, {message: "pending"});
    case FETCH_FILE_SUCCESS:
      // console.log(action.payload);
      // console.log(action.payload.files);
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
    case EDIT_COMMIT_LOG_FILE:
      return Object.assign({},state,{
        model_status:action.payload.model_status,
        status: action.payload.status
      })
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
    case EDIT_COMMIT_LOG_PENDING:
      return Object.assign({}, state, {message: "pending"});
    case EDIT_COMMIT_LOG_SUCCESS:
      return Object.assign({}, state, {
        commit_log: "123123123123",
        message: "success"
      });
    case EDIT_COMMIT_LOG_ERROR:
      return Object.assign({}, state, {message: "error"});
    default:
      return state;
  }
}
