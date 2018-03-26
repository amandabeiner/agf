import { FETCH_ARTICLES_SUCCESS } from '../actions/articles'

const initialState = { articles: [] }

export const articles = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        articles: action.payload
      })
    default:
      return state
  }
}
