import React from 'react'
import Header from './Header'
import ProjectContainer from './ProjectContainer'

const Research = props => {
  return (
    <div className="research-container">
      <Header
        headerName="Research"
        path={props.location.pathname}
      />
      <ProjectContainer />
    </div>
  )
}

export default Research;
