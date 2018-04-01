import { FETCH_RESEARCH_DESCRIPTION_SUCCESS } from '../actions/researchDescription'

const initialState = { researchDescription: {} }

export const researchDescription = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_RESEARCH_DESCRIPTION_SUCCESS:
      return Object.assign({}, state, {
        researchDescription: action.payload
      })
    default:
      return state
  }
}

