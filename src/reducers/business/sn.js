/**
 * Created by tianzx on 2017/4/24.
 */
import {
  LIST,
  MODEL,
} from '../../actions/base';

import  {
  UPLOAD_SN_MODEL
} from '../../actions/business/sn'

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
   * 单条sn数据
   */
  sn: {},
  /**
   * search 传入数据
   */
  searchData: {},

  /**
   * 查看commit_log 数据
   */
  sn_detail: '',

  /**
   * 模态窗口是否显示
   */
  model_status: false
};

export default function sn(state = initialState, action = {}) {
  switch (action.type) {
    case UPLOAD_SN_MODEL: {
      return Object.assign({},state,{
        model_status:action.payload.model_status,
        status: action.payload.status
      });
    }
    default:
      return state;
  }
}
