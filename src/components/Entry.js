import React from "react"

export default function Entry(props) {
    return (
        <div className='entry-card'>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}