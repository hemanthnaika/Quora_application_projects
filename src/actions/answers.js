import axios from "axios"
import toast from "react-hot-toast"



export const addAnswers = (AContent,question,imageUrl,content) => async (dispatch) => {
    try {
      const base_Url = 'https://quora-app-api-hemanth.herokuapp.com'
      const res = await axios.post(`${base_Url}/api/v1/answers/add`, {
        AContent,question,imageUrl,content
    })
   
    const { answers, message } = res.data
    if (answers) {
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
  console.log(AContent)
}
}

