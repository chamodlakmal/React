import {combineReducers} from "redux";
import AllPostReducer from './reducer-AllPosts';

const rootReducer=combineReducers({
    allPosts:AllPostReducer,
})

export default rootReducer;