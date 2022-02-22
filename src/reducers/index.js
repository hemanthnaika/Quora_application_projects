
import { combineReducers } from "redux";
import auth from './authReducer'
import loader from './loaderReducer'
import posts from './posts'
import question from './AddQuestion'
import questions from "./Question";
export default combineReducers({
    auth,
    loader,
    questions,
    posts,
    question,
  
})