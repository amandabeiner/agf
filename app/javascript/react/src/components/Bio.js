import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

const Bio = props => {
  return (
    <div className="bio-container row">
      <ScrollableAnchor id={"bio"} >
        <div className="bio-content">
          <div className="photo-container small-12 medium-6 columns">
            <img className="anne-photo" src="http://res.cloudinary.com/dpuzgzqir/image/upload/v1507229102/anne_square_emwvcc.jpg" />
          </div>
          <div className="anne-bio small-12 medium-6 columns">
            <p>
              I am a historian of the twentieth-century United States. In my research and teaching, I explore the histories of race, gender, and sexuality; law enforcement, policing, and the state; and social and political movements in modern U.S. cities. My dissertation focuses on some stuff.
            </p>
            <p>
              I am currently completing my PhD in History at Brown University, where my work is supported by a Mellon.ACLS Dissertation Completion Fellowship from the American Council of Learned Societies and a Dissertation Fellowship in Women's Studies from the Woodrow Wilson Foundation. My academic writing is forthcoming in "Social Histories of Neoliberalism," a special issue of the <i>Journal of Social History</i> and I have published op-eds, review essays, and interviews in the <i>Washington Post</i>, <i>Boston Globe</i>, <i>Bitch</i>, and elsewhere
            </p>
          </div>
        </div>
      </ScrollableAnchor>
    </div>
  )
}

export default Bio
