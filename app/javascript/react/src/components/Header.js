import React from 'react'
import Navbar from './Navbar'
import links from './Links'

const Header = props => {
  return (
    <div className="header-container">
      <div className="home-header">
        <h1 className="anne-name">{props.headerName}</h1>
      </div>
      <Navbar
        links={links}
        path={props.path}
      />
    </div>
  )
}

export default Header
