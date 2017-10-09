import React from 'react';
import { Link } from 'react-router';

const Navbar = props => {
  return (
    <div className="navbar-container">
      <div className="link-container">
        <Link className="nav-link" to='/'>Home</Link>
        <Link className="nav-link" to='/cv'>CV</Link>
        <Link className="nav-link" to='/research'>Research</Link>
        <Link className="nav-link" to='/teaching'>Teaching</Link>
        <Link className="nav-link" to='/writing'>Writing</Link>
      </div>
      {props.children}
    </div>
  )
}

export default Navbar
