import { combineReducers } from 'redux'

import usersReducer from './usersReducer'
import categoriesReducer from './categoriesReducer'

const mainReducer = combineReducers({
    categoriesReducer,
    usersReducer
})

export default mainReducer