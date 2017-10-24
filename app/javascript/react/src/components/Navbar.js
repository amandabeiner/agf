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

    return (
      <div className="navbar-container">
        <div className="link-container">
          <a className="nav-link" href='#bio'>About</a>
          <Link className="nav-link" to='/cv'>CV</Link>
          <Link className="nav-link" to='/research'>Research</Link>
          <Link className="nav-link" to='/teaching'>Teaching</Link>
          <Link className="nav-link" to='/writing'>Writing</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Navbar
