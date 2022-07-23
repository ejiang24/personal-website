import React from "react"
import Entry from "./Entry"

// https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp for scrolly
export default function Section(props) {
    const entryElements = props.entries.map(entry => {
        return (
            <Entry 
                title={entry.entryTitle} 
                description={entry.entryDescription} 
            />
        )
    })

    return (
        <div className='section-card'>
            <h1>{props.title}</h1>
            {entryElements}
        </div>
    )
}