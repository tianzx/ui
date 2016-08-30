/**
 * Created by tianzx on 16/8/26.
 */
import {
    FETCH_FENCE_ERROR,
    FETCH_FENCE_PENDING,
    FETCH_FENCE_SUCCESS,
    ADD_FENCE
} from '../actions/fence';

const initialState = {
    data: [],
    meta: {},
    message:"",
    status: 'list'
};

export default function fence(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_FENCE_PENDING:
            return Object.assign({}, initialState,{message:"pending"});
        case FETCH_FENCE_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload.fences.data,
                meta: action.payload.fences.meta,
                message: "success"
            });
        case FETCH_FENCE_ERROR:
            return {
                ...state,
                fences: null,
                message: action.payload.message
            };
        case ADD_FENCE:
            console.log(action)
            return Object.assign({}, state, {
                status:action.payload.status
            });
        default:
            return state;
    }
}
