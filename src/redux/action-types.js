const SERVER_HOST = process.env.SERVER_HOST
/** GET COMPONENTS CONTAINER SIZE */
export const CONTAINER_SIZE = 'CONTAINER_SIZE';


/** GET USERS INFO */ 
export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
/** GET USERS URL*/ 
// export const getUsersApi = "https://api.github.com/orgs/github/members";
export const getUsersApi = `${SERVER_HOST}/comments`;



/** GET COMMENTS INFO */ 
export const FETCH_COMMENTS_BEGIN = 'FETCH_COMMENTS_BEGIN';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
/** GET COMMENTS URL */ 
export const getCommentsApi = `${SERVER_HOST}/comments`;


/** DELETE COMMENTS INFO */ 
export const DELETE_COMMENTS_BEGIN = 'DELETE_COMMENTS_BEGIN';
export const DELETE_COMMENTS_SUCCESS = 'DELETE_COMMENTS_SUCCESS';
export const DELETE_COMMENTS_FAILURE = 'DELETE_COMMENTS_FAILURE';
/** 
 * DELETE COMMENTS URL 
 * 
 * {getCommentsApi`/${id}`}
 * id is paramete from you interact with pages
 * */ 


//PATCH COMMENTS INFO
export const PATCH_COMMENTS_BEGIN = 'PATCH_COMMENTS_BEGIN';
export const PATCH_COMMENTS_SUCCESS = 'PATCH_COMMENTS_SUCCESS';
export const PATCH_COMMENTS_FAILURE = 'PATCH_COMMENTS_FAILURE';
/** 
 * PATCH COMMENTS URL 
 * 
 * {getCommentsApi`/${id}`}
 * id is paramete from you interact with pages
 * */ 


//ALERT
export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_ERROR = 'ALERT_FAILURE';
export const ALERT_INFO = 'ALERT_INFO';
export const ALERT_WARNING = 'ALERT_WARNING';
export const ALERT_CLEAR = 'ALERT_CLEAR';