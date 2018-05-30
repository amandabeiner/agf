import React from 'react'

import ReactHtmlParser from 'react-html-parser'
import ScrollableAnchor from 'react-scrollable-anchor'

const HeadlineProject = props => {
  return(
    <ScrollableAnchor id="headline-project">
      <div className="headline-project">
        <img src="http://res.cloudinary.com/dpuzgzqir/image/upload/v1508803342/Waitress_with_Silk_Stockings_1933_Dorothea_Lange_qt0bjh.png" className="float-left"/>
        <p className="research-paragraph">
          {ReactHtmlParser(props.headlineProject.description)}
         </p>
      </div>
    </ScrollableAnchor>
  )
}

export default HeadlineProject
