import React from 'react'
import Header from './Header'
import ScrollableAnchor from 'react-scrollable-anchor'

const Cv = (props) => {
  const url = "http://res.cloudinary.com/dpuzgzqir/image/upload/v1510794459/Anne_Gray_Fischer_CV_website_k3auie.pdf"
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
