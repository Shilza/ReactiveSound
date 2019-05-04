import {REQUESTED_USER_SUCCEED} from "../actionTypes";

const initialState = {
    data: undefined,
    loading: false,
    error: false
};

export const user = (state = initialState, {type, payload = null}) => {
    switch (type) {
        case REQUESTED_USER_SUCCEED:
            return {
                data: payload,
                loading: false,
                error: false
            };
        default:
            return state;
    }
};