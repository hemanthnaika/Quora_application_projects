const initialState = {
  question: []
}
const AddAnswers = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
      case "ADD_ANSWERS":
          return state
      case "ADD_ANSWERS_FAILED":
          return state
      default:
          return state
  }

}


export default AddAnswers