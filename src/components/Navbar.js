import React from 'react'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <a href='#about' className='navbar-option'>About</a>
            <a href='#experience' className='navbar-option'>Experience</a>
            <a href='#projects' className='navbar-option'>Projects</a>
            <a href='#music' className='navbar-option'>Music</a>
            <a className='navbar-option'>Resume</a>
        </nav>
    )
}

//<a href="#home" class="active">Home</a>
 // <a href="#news">News</a>
  //<a href="#contact">Contact</a>
  //<a href="#about">About</a>
 // <a href="javascript:void(0);" class="icon" onclick="myFunction()">
  //  <i class="fa fa-bars"></i>
  //</a>