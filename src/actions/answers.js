
export const deleteAnswers = (answersId) => {

  return {
      type: "DELETE_ANSWERS",
      payload: { answersId }
  }
}

export const addProduct = (answers) => {
  return {
      type: "ADD_PRODUCT",
      payload: { answers}
  }
}