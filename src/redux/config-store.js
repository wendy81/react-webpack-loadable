import { createStore, combineReducers, applyMiddleware } from "redux";
import throttle from "lodash/throttle";
import thunk from "redux-thunk";
import rootReducer from './reducer/root-reducer';
import { combineForms, createForms } from 'react-redux-form';


const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    if (!console.group) {
        return rawDispatch
    }
    return (action) => {
        // use thunk, action !== {type:''}, action = (dispatch) => {....}
        console.group(action.type)
        console.log('%c prev state', 'color:gray', store.getState())
        console.log('%c action', 'color:blue', action)
        const returnValue = rawDispatch(action)
        console.log('%c next state', 'color:gray', store.getState())
        console.groupEnd(action.type)
        return returnValue
    }
}


const configStore = () => {
    const todoApp = combineReducers(rootReducer);
    const store = createStore(
        todoApp,
        applyMiddleware(thunk)
    );

    /**
     * process redux form data begin
     */
    const storeform = createStore(
        combineForms({
            addComments: {}
        }),
        applyMiddleware(thunk)
    );

    if (process.env.NODE_ENV !== 'production') {
        storeform.dispatch = addLoggingToDispatch(storeform)
        // store.dispatch = addLoggingToDispatch(storeform)
    }

    /**
     * process redux form data end
     */

    store.subscribe(throttle(() => {
        //every dispatch, you want to add action, eg. save state to local
    }, 1000))

    return { store, storeform }
}

export default configStore();





