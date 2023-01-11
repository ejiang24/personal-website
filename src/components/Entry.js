import React from "react"
import ReactAudioPlayer from "react-audio-player"

export default function Entry(props) {  
    return (
        <div className='entry-card'>
            <h2>{props.entryData.entryTitle} — {props.entryData.tools}</h2>           
            <div className='entry-contents'>
                {props.entryData.image && 
                <img 
                    className={props.entryData.audio ? 'music-photo' : 'entry-photo'} 
                    src={process.env.PUBLIC_URL + props.entryData.image}
                    alt={props.entryData.imageAlt }
                />}
                <div className={props.entryData.image ? 'entry-inner-div' : 'entry-inner-div-NOPHOTO'}>
                    <p>{props.entryData.entryDescription}</p>
                    {props.entryData.audio && <ReactAudioPlayer 
                        src={props.entryData.audio}
                        autoPlay={false}
                        controls
                        className='audio-player'
                    />}
                </div>
            </div>
        </div>
    )
}