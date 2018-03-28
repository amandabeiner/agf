import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrollableAnchor from 'react-scrollable-anchor'

import Header from '../components/Header'
import Article from '../components/Article'

import { fetchArticles } from '../actions/articles'

class WritingContainer extends Component {
  componentDidMount() {
    this.props.fetchArticles()
  }

  getArticles() {
    const articles = this.props.articles.map(article => {
      return (
        <Article
          key={article.id}
          imageUrl={article.image_url}
          link={article.url}
          headline={article.headline}
          source={article.source}
        />
      )
    })

    return articles
  }

  render() {
    return(
      <div className="writing-container">
        <Header
          headerName="Writing"
          path={this.props.location.pathname}
        />
        <div className="articles-container row">
          <ScrollableAnchor id="writing">
            <div className="writing-intro">
              My historical work is inspired by and responsive to the urgency of our contemporary political moment. I am committed to public writing that connects the legacies of the past with the possibilities of the future for audiences both within and beyond the classroom.
            </div>
          </ScrollableAnchor>
          {this.getArticles()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles
})

const  mapDispatchToProps = dispatch => ({
  fetchArticles: () => { dispatch(fetchArticles()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(WritingContainer)
