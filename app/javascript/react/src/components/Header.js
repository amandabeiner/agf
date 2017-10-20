import React from 'react'
import Navbar from './Navbar'

const Header = props => {
  return (
    <div className="header-container">
      <div className="home-header">
        <h1 className="anne-name">{props.headerName}</h1>
      </div>
      <Navbar />
    </div>
  )
}

export default Header
