export const FETCH_CV_SUCCESS = 'GET_CV_SUCCESS';

export const fetchCvSuccess = cv => ({
  type: FETCH_CV_SUCCESS,
  payload: cv 
})

export const fetchCv = () => {
  return (dispatch) => {
    fetch('/api/resumes/1')
      .then(response => {
      let cv = response.json()
      return cv
      }).then(cv => {
      return dispatch(fetchCvSuccess(cv))
    })
  }
}
