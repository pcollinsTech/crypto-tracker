import { GET_POSTS, GET_POST, SET_LOADING } from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                exchanges: action.payload,
                loading: false
            };
        case GET_POST:
            return {
                ...state,
                cryptos: action.payload,
                loading: false
            };
        case SET_LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        default:
            return state;
    }
};
