import { FETCH_FEED_SUCCESS, FETCH_FEED_FAILED } from '../actions/actionTypes';
const initFeed = {
    photos: [],
    error: null
}

export default function (state=initFeed, action) {
    switch (action.type) {
        case FETCH_FEED_SUCCESS:
        return {
            ...state,
            photos: action.payload.data
        };

        case FETCH_FEED_FAILED:
        return {
            ...state,
            error: action.payload.error
        };

        default:
        return state;
    }
}
