import React from 'react'
import HeadlineProject from './HeadlineProject'
import Projects from './Projects'


const ProjectContainer = props => {
  return(
    <div className="project-container">
      <HeadlineProject />
      <Projects />
    </div>
  )
}

export default ProjectContainer
