import {
    FETCH_COMMENTS_BEGIN,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    getCommentsApi
} from 'ActionTypes';
import { fetchApi } from '../fetchApi';

// fetchProduct
const fetchProductsBegin = () => ({
    type: FETCH_COMMENTS_BEGIN
});

const fetchProductsSuccess = datas => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload: { datas }
});

const fetchProductsFailure = error => ({
    type: FETCH_COMMENTS_FAILURE,
    payload: { error }
});

 const fetchCommentsApi = (params) => {
    // GET /posts?_page=7&_limit=20
    let page = params && params.page;
    let limit = params && params.limit
    let geturl = page ? `${getCommentsApi}?_page=${page}&_limit=${limit}&_sort=time&_order=desc` : getCommentsApi;
    return fetchApi(geturl, params = params, fetchProductsBegin, fetchProductsSuccess, fetchProductsFailure)
};

export default fetchCommentsApi;
