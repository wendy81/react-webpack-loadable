import {
    PATCH_COMMENTS_BEGIN,
    PATCH_COMMENTS_SUCCESS,
    PATCH_COMMENTS_FAILURE,
    getCommentsApi
} from 'ActionTypes';
import { patchApi } from '../fetchApi';

// fetchProduct
const fetchProductsBegin = () => ({
    type: PATCH_COMMENTS_BEGIN
});

const fetchProductsSuccess = datas => ({
    type: PATCH_COMMENTS_SUCCESS,
    payload: { datas }
});

const fetchProductsFailure = error => ({
    type: PATCH_COMMENTS_FAILURE,
    payload: { error }
});


const patchCommentsApi = (params = {}) => patchApi(getCommentsApi, params = params, fetchProductsBegin, fetchProductsSuccess, fetchProductsFailure);

export default patchCommentsApi