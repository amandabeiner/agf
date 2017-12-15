import React from 'react'
import Header from './Header'
import ScrollableAnchor from 'react-scrollable-anchor'

const Cv = (props) => {
  const url = "http://res.cloudinary.com/dpuzgzqir/image/upload/v1513351741/Anne_Gray_Fischer_CV_website_1_pqlyhw.pdf"

  return (
    <div className="cv-container">
      <Header
        headerName="CV"
        path={props.location.pathname}
      />
      <ScrollableAnchor id="resume">
        <iframe className="resume" src={url}></iframe>
      </ScrollableAnchor>
    </div>
  )
}

export default Cv;
