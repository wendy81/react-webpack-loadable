import {
    DELETE_COMMENTS_BEGIN,
    DELETE_COMMENTS_SUCCESS,
    DELETE_COMMENTS_FAILURE,
    getCommentsApi
} from 'ActionTypes';
import { deleteApi } from '../fetchApi';

// fetchProduct
const fetchProductsBegin = () => ({
    type: DELETE_COMMENTS_BEGIN
});

const fetchProductsSuccess = success => ({
    type: DELETE_COMMENTS_SUCCESS,
    payload: { success }
});

const fetchProductsFailure = error => ({
    type: DELETE_COMMENTS_FAILURE,
    payload: { error }
});

const deleteCommentsApi = (params = {}) => deleteApi(getCommentsApi, params = params, fetchProductsBegin, fetchProductsSuccess, fetchProductsFailure);

export default deleteCommentsApi;
