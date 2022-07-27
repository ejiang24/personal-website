import React from 'react'
import moon from "../images/moon.png"
import sun from "../images/sun.png"
import Toggle from "react-toggle"

require("react-toggle/style.css")

export default function Navbar() {
    function toggle() {
        document.body.classList.toggle('dark-theme')
    }

    
    return (
        <nav className='navbar'>
            <div className='toggle-container'>
                <Toggle 
                    className='toggle'
                    onClick={toggle} 
                    icons={{
                    checked: <img className='toggle-icon' src={moon}/>,
                    unchecked: <img className='toggle-icon' src={sun} />,
                }}/>
            </div>
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