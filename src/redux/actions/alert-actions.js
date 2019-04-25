import {
    ALERT_SUCCESS,
    ALERT_ERROR,
    ALERT_INFO,
    ALERT_WARNING,
    ALERT_CLEAR
} from 'ActionTypes';

import { alertApi } from '../fetchApi';

// alert
const alertSuccess = text => ({
    type: ALERT_SUCCESS,
    text: text
});
const alertError = text => ({
    type: ALERT_ERROR,
    text: text
});
const alertInfo = text => ({
    type: ALERT_INFO,
    text: text
});
const alertWarning = text => ({
    type: ALERT_WARNING,
    text: text
});

const alertClear = () => ({
    type: ALERT_CLEAR
});


function alertsApi(type, text) {

    switch (type) {
        case 'success':
            return alertApi(text, alertSuccess)

        case 'error':
            return alertApi(text, alertError)


        case 'info':
            return alertApi(text, alertInfo)

        case 'warning':
            return alertApi(text, alertWarning)

        case 'clear':
            return alertApi(text, alertClear)

        default:
            // ALWAYS have a default case in a reducer
            return {};
    }
}

export default alertsApi