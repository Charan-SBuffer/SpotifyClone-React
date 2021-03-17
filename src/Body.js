import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header.js'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Songrow from './SongRow';
export default function Body({spotify}){

const[{discover_weekly},dispatch] = useDataLayerValue();

    return (
        console.log( "Discover Weekly ▶▶" ,discover_weekly?.images[0].url),
        console.log("DIscription 💬",discover_weekly?.description),
        <div className="body">
                        <Header spotify= {spotify}/>

                        <div className="body_info">

                            {/* <img src={discover_weekly?.images[0].url} alt="" />   */}
                             <img src="https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png" alt="" /> 

                            <div className="body_infoText">
                                <strong>PLAYLIST</strong>
                                <h2>Discover Weekly</h2>
                                <p>Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.</p>
                                {/* <p>{discover_weekly?.description}</p> */}
                            </div>
                            </div>


<div className="body_songs" >

    <div className="body_icons">

        <PlayCircleFilledIcon className="body_shuffle" />
        <FavoriteIcon className="body_heart" fontSize="large"/>
        <MoreHorizIcon/>

    </div>
    
    <hr/>

    {discover_weekly?.tracks.items
    .map( 
        (item) =>  <Songrow track={item.track}/> 
        )} 
    </div>
    
   </div>
    )
}