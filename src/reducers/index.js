
import { combineReducers } from "redux";
import auth from './authReducer'
import loader from './loaderReducer'

import question from './AddQuestion'
import AddAnswers from "./AddAnswers";

export default combineReducers({
    auth,
    loader,
    question,
    AddAnswers,
  
})