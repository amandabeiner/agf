import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const Article = ({ imageUrl, link, headline, source }) => (
  <div className="writing-project small-12 medium-4 columns end">
    <img src={imageUrl} className="writing-image"/>
    <a className="source-link" href={link}>{ReactHtmlParser(headline)}</a>
    <p>{ReactHtmlParser(source)}</p>
  </div>
)

export default Article;
