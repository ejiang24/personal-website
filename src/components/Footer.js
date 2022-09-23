import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <ul className='contact-footer'>
                <li>   
                    <a 
                        className='contact-link' 
                        target='_blank' 
                        href="https://www.linkedin.com/in/ethan-jiang-2b074a210/"
                    >
                    <img className='contact-icon' src="/images/LinkedInLogoWhite.png" alt="Linked in icon" /></a>
                </li>
                <li>
                    <a 
                        className='contact-link' 
                        target='_blank' 
                        href="https://github.com/ejiang24"
                    >
                    <img className='contact-icon' src="/images/GithubLogoWhite.png" alt="Github icon"/></a>
                </li>
                <li>
                    <a 
                        className='contact-link' 
                        target='_blank' 
                        href="mailto: ejiang153@gmail.com"
                    >
                    <img className='contact-icon' src="/images/email.png" alt="Email icon"/></a>
                </li>
            </ul>
            <p className='footer--text'>© Ethan Jiang 2022</p>
        </div>
    )
}