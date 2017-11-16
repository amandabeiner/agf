import React from 'react'
import Header from './Header'
import Bio from './Bio'

const Home = props => {
  return (
    <div className="home-container">
      <Header
        headerName="Anne Gray Fischer"
        path={props.location.pathname}
      />
      <Bio />
    </div>
  )
}

export default Home;
