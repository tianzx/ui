/**
 * Created by tianzx on 2016/10/25.
 */
import {
  FETCH_MAP_ERROR,
  FETCH_MAP_PENDING,
  FETCH_MAP_SUCCESS,
  RETRIEVE_MAP_ERROR,
  RETRIEVE_MAP_PENDING,
  RETRIEVE_MAP_SUCCESS,
  INIT_MAP,
} from '../actions/map';

import {
  LIST, DETAIL
} from '../actions/base';

const initialState = {
  /**
   * list 的数据
   */
  // data: [],
  /**
   * 存放分页数据
   */
  // meta: {
  //   total: 0,
  //   current: 1,
  //   pageSize: 10
  // },
  /**
   * 区分不同的状态
   */
  message: "",
  /**
   * 区分不同的页面
   * list、detail
   */
  status: LIST,
  /**
   *
   * detail 的数据
   */
  map: {},
  /**
   * search 传入数据
   * 为了分页查询
   */
  searchData: {},
};

export default function map(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_MAP_PENDING:
      return Object.assign({}, initialState, {message: "pending"});
    case FETCH_MAP_SUCCESS:
      return Object.assign({}, state, {
        map: action.payload.maps.data,
        message: "success"
      });
    case FETCH_MAP_ERROR:
      return {
        ...state,
        maps: null,
        message: action.payload.message
      };
    case RETRIEVE_MAP_SUCCESS:
      return Object.assign({}, state, {
        map: action.payload.maps.data,
        status: DETAIL,
        message: "success"
      });
    case RETRIEVE_MAP_PENDING:
      return Object.assign({}, state, {message: "pending"});
    case RETRIEVE_MAP_ERROR:
      return Object.assign({}, state, {message: "error"});
    case INIT_MAP:
      return Object.assign({},initialState);
    default:
      return state;
  }
}
