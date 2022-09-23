import React from "react"
import headshot from "../images/ethan-garden-crop.jpg"

export default function AboutCard() {
    return (
        <div id='about' className='about--border'>
          <div className='about--container'>
            <img className='headshot' src={headshot} alt='A photo of me'/>
            <div className='about--text-container'>
              <p className='about--text'>
                Hello! My name is Ethan Jiang, and I am a programmer and composer 
                currently studying Computer Science and Music at Brown University.
                I'm currently looking for Summer 2023 opportunities in SWE.
                <p></p>
                In my free time I love to play drums with Gendo Taiko, play Nintendo games,
                and listen to Maurice Ravel.
                <p></p>
                Thanks for visiting!
              </p>
            </div>
          </div>
          <ul className='contact'>
            <li>   
              <a 
                className='contact-link' 
                target='_blank' 
                href="https://www.linkedin.com/in/ethan-jiang-2b074a210/">
                <img 
                  className='contact-icon' 
                  src="/images/LinkedInLogoWhite.png" 
                  alt="Linked in icon" 
                />
                ethan-jiang
              </a>
            </li>
            <li>
              <a 
                className='contact-link' 
                target='_blank' 
                href="https://github.com/ejiang24">
                <img 
                  className='contact-icon' 
                  src="/images/GithubLogoWhite.png" 
                  alt="Github icon" 
                />
                ejiang24
              </a>
            </li>
            <li>
              <a 
                className='contact-link' 
                target='_blank' 
                href="mailto: ejiang153@gmail.com">
                <img 
                  className='contact-icon' 
                  src="/images/email.png" 
                  alt="Email icon" 
                />
              ejiang153@gmail.com
              </a>
            </li>
          </ul>
        </div>
    )
}