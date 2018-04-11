import { FETCH_BIO_SUCCESS } from '../actions/bio'

const initialState = { bio: {} }

export const bio = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BIO_SUCCESS:
      return Object.assign({}, state, {
        bio: action.payload
      })
    default:
      return state
  }
}
