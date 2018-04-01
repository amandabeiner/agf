import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScrollableAnchor from 'react-scrollable-anchor'

import ReactHtmlParser from 'react-html-parser'
import { fetchBio } from '../actions/bio'

class BioContainer extends Component {
  componentDidMount() {
    this.props.fetchBio()
  }

  render() {
    return (
      <div className="bio-container row clearfix">
        <ScrollableAnchor id={"bio"} >
          <div className="bio-content">
            <div className="photo-container small-12 medium-6 columns">
              <img className="anne-photo" src="http://res.cloudinary.com/dpuzgzqir/image/upload/v1507229102/anne_square_emwvcc.jpg" />
            </div>
            <div className="anne-bio small-12 medium-6 columns">
              {ReactHtmlParser(this.props.bio.paragraph)}
              <div style={{marginTop: "4%"}}>
                <img src="https://res.cloudinary.com/dpuzgzqir/image/upload/v1513354554/email-2048-black_xoqvpo.png" style={{maxWidth: "25px", marginRight: "5px"}} />
                anne_gray_fischer[at]brown[dot]edu
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bio: state.bio.bio
})

const mapDispatchToProps = dispatch => ({
  fetchBio: () => { dispatch(fetchBio()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(BioContainer)
  
