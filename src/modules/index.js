import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import state from './state'

export default combineReducers({
    state,
    form: formReducer
})