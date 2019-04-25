const addLoggingToDispatch = (dispatch, getState) => {
    const rawDispatch = dispatch;
    if (!console.group) {
        return rawDispatch
    }
    return (action) => {
        console.group(action.type)
        console.log('%c prev state', 'color:gray', getState())
        console.log('%c action', 'color:blue', action)
        const returnValue = rawDispatch(action)
        console.log('%c next state', 'color:gray', getState())
        console.groupEnd(action.type)
        return returnValue
    }
}

export default addLoggingToDispatch;
