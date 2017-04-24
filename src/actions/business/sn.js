/**
 * Created by tianzx on 2017/4/24.
 */
import api from '../../api';
import * as base from '../base';

export const UPLOAD_SN_MODEL = 'UPLOAD_SN_MODEL';

export function uploadSNModel() {
  return {
    type: UPLOAD_SN_MODEL,
    payload: {
      status: base.LIST,
      model_status: true
    }
  }
}
