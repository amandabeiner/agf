import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Article from '../components/Article'
import ResearchDescription from '../components/ResearchDescription'

import { fetchResearchDescription } from '../actions/researchDescription'
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
          <ResearchDescription
            fetchResearchDescription={this.props.fetchResearchDescription}
            researchDescription={this.props.researchDescription}
          />
          {this.getArticles()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles,
  researchDescription: state.researchDescription.researchDescription
})

const  mapDispatchToProps = dispatch => ({
  fetchArticles: () => { dispatch(fetchArticles()) },
  fetchResearchDescription: () => { dispatch(fetchResearchDescription()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(WritingContainer)
