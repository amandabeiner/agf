export const FETCH_BIO_SUCCESS = 'FETCH_BIO_SUCCESS'

export const fetchBioSuccess = bio => ({
  type: FETCH_BIO_SUCCESS,
  payload: bio
})

export const fetchBio = () => {
  return (dispatch) => {
    fetch('/api/bios')
      .then(response => {
        let bio = response.json()
        return bio
      }).then(bio => {
        return dispatch(fetchBioSuccess(bio))
      })
  }
}
