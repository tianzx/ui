/**
 * Created by tianzx on 16/8/26.
 */
import {
    FETCH_FENCE_ERROR,
    FETCH_FENCE_PENDING,
    FETCH_FENCE_SUCCESS
} from '../actions/fence';

const initialState = {
    fences: "",
    message:""
};

export default function fence(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_FENCE_PENDING:
            return Object.assign({}, initialState,{message:"pending"});
        case FETCH_FENCE_SUCCESS:
            return Object.assign({}, state, {
                fences: action.payload.fences,
                message: "success"
            });
        case FETCH_FENCE_ERROR:
            return {
                ...state,
                fences: null,
                message: action.payload.message
            };
        default:
            return state;
    }
}
