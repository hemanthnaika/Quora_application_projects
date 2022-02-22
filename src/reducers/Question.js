
/*
Product :
    imageUrl,
    productName,
    description,
    actualPrice,
    listingPrice
    category:"WHATVER THE CATEGORY IS",
    compatibleWith,
    color
*/

const initialState = {
  questions: [
      {
          id: 1,
        question: "Can React be used to build a forum website with several thread pages?",
        follow:23,
      }, {
          id: 2,
          question: "Can React be used to build a forum website with several thread pages?",
          follow:2,
      }
      , {
          id: 3,
          question: "Can React be used to build a forum website with several thread pages?",
          follow:2,
      }
      , {
          id: 9,
          question: "Can React be used to build a forum website with several thread pages?",
          follow:63,
      }
      , {
          id: 4,
          question: "hii how are you",
          follow:73,
      },
      {
          id:5,
          question: "Can React be used to build a forum website with several thread pages?",
        follow:93,
      },
  ]
}
const  questionsReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
      case 'DELETE_PRODUCT':
          const { questionId } = payload
          return {
              question: state.question.filter(prod => prod.id !== questionId)
          }
      case 'ADD_PRODUCT':
          const { question } = payload
          return {
              questions: [...state.questions, question]
          }
      default:
          return state
  }

}


export default questionsReducer