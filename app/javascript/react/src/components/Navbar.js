import React from 'react';
import { Link } from 'react-router';

const Navbar = props => {

  window.addEventListener('scroll', () => {
    const navDiv = document.getElementsByClassName('link-container')[0]

    // const anneName = document.getElementsByClassName('anne-name')[0]

    if(window.scrollY >= navDiv.offsetTop) {
      console.log("I'm a general, weee!")
      navDiv.classList.add('sticky-nav')
    }
  })

  window.addEventListener('scroll', () => {
    const navDiv = document.getElementsByClassName('navbar-container')[0]

    // const bioContent = document.getElementsByClassName('bio-content')[0]

    const homeHeader = document.getElementsByClassName('home-header')[0]
    const homeHeaderHeight = homeHeader.offsetTop + homeHeader.clientHeight
    console.log(homeHeaderHeight)
    const navIsSticky = navDiv.classList.contains('sticky-nav')


    if(window.scrollY <= homeHeaderHeight && navIsSticky) {
      console.log("I'm sorry is this not your speed")
      navDiv.classList.remove('sticky-nav')
    }
  })

  return (
    <div className="navbar-container">
      <div className="link-container">
        <a className="nav-link" href='#bio'>About</a>
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
