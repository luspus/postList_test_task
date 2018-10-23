export const POSTS_LIST = 'state/POSTS_LIST'
export const SAVE_NEW_POST = 'state/SAVE_NEW_POST'
export const SAVE_USER_ID = 'state/SAVE_USER_ID'

const initialState = {
    posts: [],
    userId: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POSTS_LIST:
            return {
                ...state,
                posts: action.payload
            }

        case SAVE_NEW_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }

        case SAVE_USER_ID:
            return {
                ...state,
                userId: action.payload
            }

        default:
            return state
    }
}

export const saveUserId = (id) => {
    return dispatch => {
        dispatch({
            type: SAVE_USER_ID,
            payload: id
        })
    }
}

export const postsList = (arr) => {
    return dispatch => {
        dispatch({
            type: POSTS_LIST,
            payload: arr
        })
    }
}

export const saveNewPost = (text) => {
    return dispatch => {
        dispatch({
            type: SAVE_NEW_POST,
            payload: text
        })
    }
}