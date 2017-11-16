import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const navDiv = document.getElementsByClassName('link-container')[0]
      const homeHeader = document.getElementsByClassName('home-header')[0]
      const homeHeaderHeight = homeHeader.offsetTop + homeHeader.clientHeight
      const navIsSticky = navDiv.classList.contains('sticky-nav')

      if(window.scrollY >= navDiv.offsetTop) {
        navDiv.classList.add('sticky-nav')
      }

      if(window.scrollY <= homeHeaderHeight && navIsSticky) {
        navDiv.classList.remove('sticky-nav')
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.makeNavSticky())
  }

  makeNavSticky() {
    const navDiv = document.getElementsByClassName('link-container')[0]
    const homeHeader = document.getElementsByClassName('home-header')[0]
    const homeHeaderHeight = homeHeader.offsetTop + homeHeader.clientHeight
    const navIsSticky = navDiv.classList.contains('sticky-nav')

    if(window.scrollY >= navDiv.offsetTop) {
      navDiv.classList.add('sticky-nav')
    }

    if(window.scrollY <= homeHeaderHeight && navIsSticky) {
      navDiv.classList.remove('sticky-nav')
    }
  }
  
  render() {
    let target
    const navLinks = this.props.links.map((link) => {
      if(this.props.path === link.href) {
        return(
          <a key={link.href} className="nav-link" href={`${link.id}`}>{link.text}</a>
        )
      } else {
        return(
          <Link key={link.href} className="nav-link" to={`${link.href}`}>{link.text}</Link>
        )
      }
    })

    return (
      <div className="navbar-container">
        <div className="link-container">
          {navLinks}
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Navbar
