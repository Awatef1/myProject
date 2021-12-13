import {combineReducers} from  'redux'
import authReducer from "./authReducers"
import postReducer from './post'
import { editReducer } from './edit'
const rootReducer =  combineReducers({authReducer,postReducer,editReducer})

export default rootReducer