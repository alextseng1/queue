import {
  CREATE_QUESTION_SUCCESS,
  FETCH_QUEUE_SUCCESS,
} from '../constants/ActionTypes'

const defaultState = {
  isFetching: true,
  error: false,
  questions: {},
}

const questions = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_QUESTION_SUCCESS: {
      const { question } = action
      return Object.assign({}, state, {
        questions: {
          ...state.questions,
          [question.id]: question,
        },
      })
    }
    case FETCH_QUEUE_SUCCESS: {
      const { queue } = action
      return Object.assign({}, state, {
        questions: {
          ...state.questions,
          ...queue.questions.reduce((obj, item) => {
            obj[item.id] = item
            return obj
          }, {}),
        },
      })
    }
    default:
      return state
  }
}

export default questions