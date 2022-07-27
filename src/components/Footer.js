import React from 'react'
import linkedin from "../images/LinkedInLogoWhite.png"
import github from "../images/GithubLogoWhite.png"
import email from "../images/email.png"

export default function Footer() {
    return (
        <div className='footer'>
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
            <p className='footer--text'>© Ethan Jiang 2022</p>
        </div>
    )
}