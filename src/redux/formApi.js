import { actions } from 'react-redux-form';
// import logger from './dispatch-logger'

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    console.log('00000')
    console.log(response)
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// action thunk creator
function submitComments(url, datas) {
    const data = datas.data;
    const modal = datas.modal;
    return (dispatch) => {
        dispatch(actions.setPending(modal, true));
        return fetch(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            }).then(handleErrors)
            .then((res) => {
                // handle the response, then...
                dispatch({
                    model: "addComments",
                    type: "rrf/reset"
                })
                dispatch(actions.setSubmitted(modal, true));
                return 1
            }).catch(error =>{
                console.log('1111')
                console.log(error)
                dispatch(actions.setErrors(modal, error))
                return 0
            } );
    }
}

export const submitCommentsApi = (params) => submitComments(process.env.SERVER_HOST+'/comments', params)