import { combineReducers } from 'redux'
import animesReducer from './animes'

const rootReducer = combineReducers({
    animes: animesReducer
})

export default rootReducer