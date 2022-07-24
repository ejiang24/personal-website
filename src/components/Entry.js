import React from "react"
import ReactAudioPlayer from "react-audio-player"

export default function Entry(props) {  
    return (
        <div className='entry-card'>
            <h4>{props.entryData.entryTitle}</h4>
            <div className='entry-contents'>
                {props.entryData.image && 
                <img className='music-photo' src={props.entryData.image} />}
                <div className={props.entryData.image ? 'entry-inner-div' : ''}>
                    <p>{props.entryData.entryDescription}</p>
                    {props.entryData.audio && <ReactAudioPlayer 
                        src={props.entryData.audio}
                        autoPlay='false'
                        controls
                        className='audio-player'
                    />}
            </div>
            </div>
        </div>
    )
}