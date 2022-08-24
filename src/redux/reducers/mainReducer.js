import { combineReducers } from 'redux'

import usersReducer from './usersReducer'

const mainReducer = combineReducers({
    usersReducer
})

export default mainReducer