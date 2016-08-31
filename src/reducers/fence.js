/**
 * Created by tianzx on 16/8/26.
 */
import {
    FETCH_FENCE_ERROR,
    FETCH_FENCE_PENDING,
    FETCH_FENCE_SUCCESS,
    ADD_FENCE,
    SUBMIT_FENCE_ERROR,
    SUBMIT_FENCE_PENDING,
    SUBMIT_FENCE_SUCCESS
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
            return Object.assign({}, state, {
                status:action.payload.status
            });
        case SUBMIT_FENCE_SUCCESS:
            return Object.assign({}, initialState,{message:"success"})
        case SUBMIT_FENCE_PENDING:
            return Object.assign({}, initialState,{message:"pending"})
        case SUBMIT_FENCE_ERROR:
            return Object.assign({}, initialState,{message:"error"})
        default:
            return state;
    }
}
