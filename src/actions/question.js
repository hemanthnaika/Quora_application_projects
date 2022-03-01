
import axios from 'axios'
import { toast } from 'react-hot-toast'
export const addQuestion = ( questionContent,imageUrl) => async (dispatch) => {  
    try {
        const base_Url = 'https://quora-app-api-hemanth.herokuapp.com'
        const res = await axios.post(`${base_Url}/api/v1/question/add`, {
            imageUrl,questionContent
        })
        console.log(questionContent,imageUrl)
        console.log(res)
        const { questions, message } = res.data

        if (questions) {
            toast.success(message)
            dispatch({
                type: "ADD_QUESTION",
            })
        } else {
            toast.error(message)
            dispatch({
                type: "ADD_QUESTION_FAILED",
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};