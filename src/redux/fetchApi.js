import logger from './dispatch-logger'

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    return response;
}


function alertApi(text, fn) {
    return (dispatch, getState) => {
        let newDispatch = dispatch;
        if (process.env.NODE_ENV !== 'production') {
            newDispatch = logger(dispatch, getState)
        }
        newDispatch(fn(text));
    };
}

function fetchApi(url, params, beginFn, successFn, failureFn) {
    return (dispatch, getState) => {
        let newDispatch = dispatch;
        if (process.env.NODE_ENV !== 'production') {
            newDispatch = logger(dispatch, getState)
        }

        newDispatch(beginFn());

        return fetch(url).then(handleErrors)
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(json => {
                newDispatch(successFn(json));
                return json;
            })
            .catch(error => {
                newDispatch(failureFn(error.message))
            });
    };
}


function deleteApi(url, params, beginFn, successFn, failureFn) {
    return (dispatch, getState) => {
        let newDispatch = dispatch;
        if (process.env.NODE_ENV !== 'production') {
            newDispatch = logger(dispatch, getState)
        }

        newDispatch(beginFn());

        return fetch(url + '/' + params.id,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                // body: JSON.stringify(data)
            }).then(handleErrors)
            .then(res => res.json())
            .then(json => {
                newDispatch(successFn('Delete Successfully!'));
                return 1
            })
            .catch(error => {
                newDispatch(failureFn(JSON.parse(error.message)))
                return 0
            });
    };
}

function patchApi(url, params, beginFn, successFn, failureFn) {
    console.log('2332423423423423');
    console.log(params)
    return (dispatch, getState) => {
        let newDispatch = dispatch;
        if (process.env.NODE_ENV !== 'production') {
            newDispatch = logger(dispatch, getState)
        }

        newDispatch(beginFn());

        return fetch(url + '/' + params.id,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                body: JSON.stringify(params)
            }).then(handleErrors)
            .then(res => res.json())
            .then(json => {
                newDispatch(successFn(json));
                return json;
            })
            .catch(error => newDispatch(failureFn(JSON.parse(error.message))));
    };
}


export { fetchApi, deleteApi, patchApi, alertApi };