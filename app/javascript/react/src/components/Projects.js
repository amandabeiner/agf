import React from 'react'

const Projects = props => {
  return (
    <div className="project-tile-container row">
      <h3 className="research-header other-research">Other Research</h3>
      <div className="project small-12 medium-6 columns">
        <img src="http://res.cloudinary.com/dpuzgzqir/image/upload/v1508803335/strip_city_medium_res_ccjbjf.jpg" className="project-photo"/>
        <p className="project-text">
          <p>"Land of the White Hunter": Legal Liberalism and the Racial Politics of Morals Enforcement in Midcentury Los Angeles</p>
          <p>In this essay, which has been selected for inclusion in a planned collection, <i>The Intimate State: Gender, Sexuality, and Governance in Modern U.S. History</i>, edited by Margot Canaday, Nancy Cott, and Robert Self, I argue that the racial inequity in morals policing—which was exacerbated by liberalizing morals law reforms—was a powerful factor in the many clashes between police and black residents that culminated in the 1965 uprising in the black neighborhood of Watts
          </p> 
        </p>
      </div>
      <div className="project small-12 medium-6 columns">
        <img src="http://res.cloudinary.com/dpuzgzqir/image/upload/v1508803339/women_in_combat_zone_fasfj7.jpg" className="project-photo"/>
        <p className="project-text">
          <p>"You are Now Entering the Combat Zone": Policing Black Women to Solve Boston's Urban Crisis</p>
          <p>In this essay, which is forthcoming in "Social Histories of Neoliberalism," a special issue of the <i>Journal of Social History</i>, I argue that the sexual policing of black women was central to urban fiscal revival strategies of Boston in the 1970s:.
          </p>
        </p>
      </div>
    </div>
  )
}

export default Projects
