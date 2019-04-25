import {
    ALERT_SUCCESS,
    ALERT_ERROR,
    ALERT_INFO,
    ALERT_WARNING,
    ALERT_CLEAR
} from 'ActionTypes';

const initialState = {
    visible:true
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {

        case ALERT_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                text: action.text,
                type: 'success',
                visible:true
            };


        case ALERT_ERROR:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                text: action.text,
                type: 'error',
                visible:true
            };


        case ALERT_INFO:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                text: action.text,
                type: 'info',
                visible:true
            };


        case ALERT_WARNING:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                text: action.text,
                type: 'warning',
                visible:true
            };

        case ALERT_CLEAR:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                visible:false
            };


        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}