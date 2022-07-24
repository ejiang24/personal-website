import React from "react"
import ReactAudioPlayer from "react-audio-player"
import music from "../music/BoogieBrawlMenuMusic.mp3"

export default function Entry(props) {
    return (
        <div className='entry-card'>
            <h4>{props.entryData.entryTitle}</h4>
            <p>{props.entryData.entryDescription}</p>
            {props.entryData.audio && <ReactAudioPlayer 
                src={music}
                autoPlay
                controls
            />}
        </div>
    )
}