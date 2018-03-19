export const FETCH_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';

export const fetchProjectsSuccess = projects => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload: projects
})

export const fetchProjects = () => {
  return (dispatch) => {
    fetch('/api/research')
      .then(response => {
      let projects = response.json()
      return projects
      }).then(projects => {
        console.log(projects)
      return dispatch(fetchProjectsSuccess(projects))
    })
  }
}
