import React, { Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'

const Projects = props => {
  const projects = props.projects.map(project => {
    return (
      <div>
        <div className="project small-12 medium-6 columns">
          <img src={project.image_url} className="project-photo"/>
        </div>
        <div className="project small-12 medium-6 columns">
          <p className="project-text">
            {ReactHtmlParser(project.title)} <br />
            {ReactHtmlParser(project.description)}
          </p>
        </div>
      </div>
    )
  })
  console.log(props)
  return (
    <div className="project-tile-container row">
      <h3 className="research-header other-research">Other Research</h3>
      {projects}
    </div>
  )
}

export default Projects
