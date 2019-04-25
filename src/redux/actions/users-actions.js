import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    getUsersApi
} from 'ActionTypes';
import { fetchApi } from '../fetchApi';

// fetchProduct
const fetchProductsBegin = () => ({
    type: FETCH_USERS_BEGIN
});

const fetchProductsSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: { users }
});

const fetchProductsFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: { error }
});

const fetchUserApi = (params = {}) => fetchApi(getUsersApi, params = params, fetchProductsBegin, fetchProductsSuccess, fetchProductsFailure);

export default fetchUserApi;