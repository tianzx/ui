/**
 * Created by tianzx on 16/8/26.
 */
import {
    FETCH_FENCE_ERROR,
    FETCH_FENCE_PENDING,
    FETCH_FENCE_SUCCESS,
    EDIT_FENCE,
    CREATE_FENCE_ERROR,
    CREATE_FENCE_PENDING,
    CREATE_FENCE_SUCCESS,
    RETRIEVE_FENCE_ERROR,
    RETRIEVE_FENCE_PENDING,
    RETRIEVE_FENCE_SUCCESS,
    UPDATE_FENCE_ERROR,
    UPDATE_FENCE_PENDING,
    UPDATE_FENCE_SUCCESS,
    DELETE_FENCE_ERROR,
    DELETE_FENCE_PENDING,
    DELETE_FENCE_SUCCESS,
    LIST,
    EDIT,
} from '../actions/fence';

const initialState = {
    /**
     * list 的数据
     */
    data: [],
    /**
     * 存放分页数据
     */
    meta: {},
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
    fence: {}
};

export default function fence(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_FENCE_PENDING:
            return Object.assign({}, initialState, {message: "pending"});
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
        case EDIT_FENCE:
            return Object.assign({}, state, {
                status: action.payload.status
            });
        case CREATE_FENCE_SUCCESS:
            return Object.assign({}, initialState, {message: "success"})
        case CREATE_FENCE_PENDING:
            return Object.assign({}, initialState, {message: "pending"})
        case CREATE_FENCE_ERROR:
            return Object.assign({}, initialState, {message: "error"})
        case RETRIEVE_FENCE_SUCCESS:
            return Object.assign({}, state, {
                fence: action.payload.fence,
                status: EDIT,
                message: "success"
            });
        case RETRIEVE_FENCE_PENDING:
            return Object.assign({}, state, {message: "pending"});
        case RETRIEVE_FENCE_ERROR:
            return Object.assign({}, state, {message: "error"});

        default:
            return state;
    }
}
