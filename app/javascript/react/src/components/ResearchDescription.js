import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import ReactHtmlParser from 'react-html-parser'

class ResearchDescription extends Component {
  componentDidMount() {
    this.props.fetchResearchDescription()
  }

  render() {
    return (
      <ScrollableAnchor id="writing">
        <div className="writing-intro">
          {ReactHtmlParser(this.props.researchDescription.paragraph)}
        </div>
      </ScrollableAnchor>
    )
  }
}

export default ResearchDescription
