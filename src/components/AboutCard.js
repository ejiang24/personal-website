import React from "react"
import photo from "../images/ethan-garden-crop.jpg"

export default function AboutCard() {
    return (
        <div id='about' className='about--border'>
          <div className='about--container'>
            <img className='headshot' src={photo} alt='this is me'/>
            <div className='about--text-container'>
              <p className='about--text'>
                Hello! My name is Ethan Jiang, and I am a programmer and composer 
                currently studying Computer Science and Music at Brown University.
                <p></p>
                I love Korean food, Azure Moon Chapter 22 is kicking my ass, and CSS makes me want to cry.
                <p></p>
                Thanks for visiting!
              </p>
            </div>
          </div>
          <ul className='contact'>
            <li>LinkedIn</li>
            <li>Github</li>
            <li>Email</li>
          </ul>
        </div>
    )
}