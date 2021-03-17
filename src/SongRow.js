import React from 'react'
import './SongRow.css'

export default function Songrow({track}){
    return (
        <div className="songRow">
            <img className="sonRow_album" src={track.album.images[0].url} alt=""/>
            <div className="songRow_info">
    <h1>{track.name}</h1>
    <p>
        {track.artists.map((artists) => artists.name ).join(",")}
        {track.album.name}
    </p>
            </div>
            <h1>I am SongRow</h1>

        </div>
    )
}