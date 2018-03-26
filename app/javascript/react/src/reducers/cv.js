import { FETCH_CV_SUCCESS } from '../actions/cv'

const initialState = { cv: {} }

export const cv = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CV_SUCCESS:
      return Object.assign({}, state, {
        cv: action.payload
      })
    default:
      return state;
  }
}
