export const FETCH_RESEARCH_DESCRIPTION_SUCCESS = 'FETCH_RESEARCH_DESCRIPTION_SUCCESS'

export const fetchResearchDescriptionSuccess = researchDescription => ({
  type: FETCH_RESEARCH_DESCRIPTION_SUCCESS,
  payload: researchDescription
})

export const fetchResearchDescription = () => {
  return (dispatch) => {
    fetch('/api/research_descriptions')
      .then(response => {
        let researchDescription = response.json()
        return researchDescription
      }).then(researchDescription => {
        return dispatch(fetchResearchDescriptionSuccess(researchDescription))
      })
  }
}
