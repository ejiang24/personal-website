import React from "react"
import photo from "../images/ethan-garden-crop.jpg"

export default function AboutCard() {
    return (
        <div className='about--container'>
          <img className='headshot' src={photo}/>
          <div className='about--text-container'>
            <p className='about--text'>
              Hi! My name is Ethan Jiang, and I am a programmer and composer 
              currently pursuing an Bachelor's of Science in Computer Science and Music 
              at Brown University.
              <p></p>
              I love Korean food, Azure Moon Chapter 22 is kicking my ass, 
              and CSS makes me want to cry.
              <p></p>
              Thanks for visiting!
            </p>
          </div>
        </div>
    )
}