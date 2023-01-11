import React from 'react'
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
                    checked: <img className='toggle-icon' src="/images/moon.png" alt="Night mode icon"/>,
                    unchecked: <img className='toggle-icon' src="/images/sun.png" alt="Day mode icon" />,
                }}/>
            </div>
            <div className='navbar-options'>
                <a href='#about' className='navbar-option'>About</a>
                <a href='#experience' className='navbar-option'>Experience</a>
                <a href='#projects' className='navbar-option'>Projects</a>
                <a href='#music' className='navbar-option'>Music</a>
                <a target='_blank' href='https://drive.google.com/file/d/1cAW7DDeuyFzUz1OgXm1QZOCTcD2rrpkp/view?usp=sharing' className='navbar-option'>Resume</a>
            </div>
            
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