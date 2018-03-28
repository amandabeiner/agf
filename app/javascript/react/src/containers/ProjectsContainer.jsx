import React, { Component } from 'react'
import { connect } from 'react-redux'

import HeadlineProject from '../components/HeadlineProject'
import Projects from '../components/Projects'

import { fetchProjects } from '../actions/projects'

class ProjectsContainer extends Component {
  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    return(
      <div className="project-container">
        <HeadlineProject
          headlineProject={this.props.headlineProject}
        />
        <Projects
          projects={this.props.projects}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  headlineProject: state.projects.headlineProject,
  projects: state.projects.projects
})

const  mapDispatchToProps = dispatch => ({
  fetchProjects: () => { dispatch(fetchProjects()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)
