import { FETCH_PROJECTS_SUCCESS } from '../actions/projects';

const intialState = {
  headlineProject: {},
  projects: []
}

export const projects = (state = intialState, action) => {
  switch(action.type){
    case FETCH_PROJECTS_SUCCESS:
      return Object.assign({}, state, {
        headlineProject: action.payload.headline,
        projects: action.payload.projects
      })
    default:
      return state;
  }
}
