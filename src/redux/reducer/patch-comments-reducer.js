import {
    PATCH_COMMENTS_BEGIN,
    PATCH_COMMENTS_SUCCESS,
    PATCH_COMMENTS_FAILURE
} from 'ActionTypes';

const initialState = {
    comments: {},
    loading: true,
    error: null
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case PATCH_COMMENTS_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case PATCH_COMMENTS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                comments: action.payload.datas
            };

        case PATCH_COMMENTS_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                comments: {},
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}