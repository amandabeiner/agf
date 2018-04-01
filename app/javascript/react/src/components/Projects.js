import React, { Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'

const Projects = props => {
  const projects = props.projects.map(project => {
    return (
      <div className="small-12 row" style={{ marginBottom: "2%"}}>
        <div className="project small-12 medium-6 columns">
          <img src={project.image_url} className="project-photo"/>
        </div>
        <div className="project small-12 medium-6 columns">
          <p className="project-text">
            <div style={{marginBottom: "7%"}}>
              {ReactHtmlParser(project.title)}
            </div>
            <div>
              {ReactHtmlParser(project.description)}
            </div>
          </p>
        </div>
      </div>
    )
  })

  return (
    <div className="project-tile-container row">
      <h3 className="research-header other-research">Other Research</h3>
      {projects}
    </div>
  )
}

export default Projects
