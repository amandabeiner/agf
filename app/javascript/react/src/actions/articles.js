export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS'

export const fetchArticlesSuccess = articles => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: articles
})

export const fetchArticles = () => {
  return (dispatch) => {
    fetch('/api/articles')
      .then(response => {
        return response.json()
      })
      .then(articles => {
        return dispatch(fetchArticlesSuccess(articles))
      })
  }
}
