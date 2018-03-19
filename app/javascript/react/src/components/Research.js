import React from 'react'
import Header from './Header'
import ProjectsContainer from '../containers/ProjectsContainer'

const Research = props => {
  return (
    <div className="research-container">
      <Header
        headerName="Research"
        path={props.location.pathname}
      />
      <ProjectsContainer />
    </div>
  )
}

export default Research;
