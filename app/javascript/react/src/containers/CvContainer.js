import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrollableAnchor from 'react-scrollable-anchor'

import Header from '../components/Header'
import { fetchCv } from '../actions/cv'

class CvContainer extends Component {
  componentDidMount() {
    this.props.fetchCv()
  }

  render() {
    return (
      <div className="cv-container">
        <Header
          headerName="CV"
          path={this.props.location.pathname}
        />
        <ScrollableAnchor id="resume">
          <iframe className="resume" src={this.props.cv.url}></iframe>
        </ScrollableAnchor>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  cv: state.cv.cv
})

const  mapDispatchToProps = dispatch => ({
  fetchCv: () => { dispatch(fetchCv()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CvContainer)
