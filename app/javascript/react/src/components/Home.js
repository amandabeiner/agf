import React from 'react'
import Header from './Header'
import BioContainer from '../containers/BioContainer'

const Home = props => {
  return (
    <div className="home-container">
      <Header
        headerName="Anne Gray Fischer"
        path={props.location.pathname}
      />
      <BioContainer />
    </div>
  )
}

export default Home;
