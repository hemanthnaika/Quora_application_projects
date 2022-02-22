
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { toast } from 'react-hot-toast'



export const addQuestion = (content) => async (dispatch) => {

    try {
        const base_Url = 'http://localhost:8080'

        const res = await axios.post(`${base_Url}/api/v1/question/add`, {
            content
        })
        console.log(res)
        const { question, message } = res.data

        if (question) {
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