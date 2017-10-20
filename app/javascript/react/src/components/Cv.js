import React from 'react'
import Header from './Header'

// import { Document, Page } from 'react-pdf/build/entry.webpack'
// import './resume.pdf'
// import { Document } from 'react-pdf/build/entry.webpack'
// import Resume from '../constants/resume.pdf'
// <Document
//   file={{url: "http://res.cloudinary.com/dpuzgzqir/raw/upload/v1508198427/resume_exbqkm.pdf"}}
// />
const Cv = props => {
  return (
    <div>
      <Header
        headerName="CV"
      />
      <img src="https://img.cuteness.com/cute-article-grid/cuteness/s3fs-public/1473972395540mceclip2.png" style={{display: 'block', margin: '5rem auto'}} />
      <h1 style={{'text-align': 'center'}}>Can't find anything here yet</h1 >
    </div>
  )
}

export default Cv;
