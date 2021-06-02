import { combineReducers } from 'redux'
import animesReducer from './animes'

const rootReducer = combineReducers({
    top10: animesReducer
})

export default rootReducer