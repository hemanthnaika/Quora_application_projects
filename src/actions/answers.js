import axios from "axios"
import toast from "react-hot-toast"

export const deleteProduct = (productId) => {

    return {
        type: "DELETE_PRODUCT",
        payload: { productId }
    }
}

export const addAnswers = (id,content,question,Answers) => async (dispatch) => {
    try {
      const base_Url = 'https://quora-app-api-hemanth.herokuapp.com'
      const res = await axios.post(`${base_Url}/api/v1/answers/add`, {
        id,content,question,Answers
    })
    const { answer, message } = res.data
    if (answer) {
      toast.success(message)
      dispatch({
          type: "ADD_ ANSWERS",
      })
  } else {
      toast.error(message)
      dispatch({
          type: "ADD_ ANSWERS_FAILED",
      })
  }
} catch (error) {
  console.log(error.message)
  toast.error(error.message)
}
}

