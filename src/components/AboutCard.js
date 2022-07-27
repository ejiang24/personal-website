import React from "react"
import headshot from "../images/ethan-garden-crop.jpg"
import linkedin from "../images/LinkedInLogoWhite.png"
import github from "../images/GithubLogoWhite.png"
import email from "../images/email.png"

export default function AboutCard() {
    return (
        <div id='about' className='about--border'>
          <div className='about--container'>
            <img className='headshot' src={headshot} alt='this is me'/>
            <div className='about--text-container'>
              <p className='about--text'>
                Hello! My name is Ethan Jiang, and I am a programmer and composer 
                currently studying Computer Science and Music at Brown University.
                <p></p>
                CSS makes me want to cry. CSS makes me want to cry. CSS makes me want to cry.
                <p></p>
                Thanks for visiting!
              </p>
            </div>
          </div>
          <ul className='contact'>
            <li>   
              <a className='contact-link' href="https://www.linkedin.com/in/ethan-jiang-2b074a210/">
              <img className='contact-icon' src={linkedin} />ethan-jiang</a>
            </li>
            <li>
              <a className='contact-link' href="https://github.com/ejiang24"><img className='contact-icon' src={github} />ejiang24</a>
            </li>
            <li>
              <a className='contact-link' href="mailto: ejiang153@gmail.com"><img className='contact-icon' src={email} />ejiang153@gmail.com</a>
            </li>
          </ul>
        </div>
    )
}