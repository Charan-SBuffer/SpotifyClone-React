import React from 'react'
import "./Footer.css"

import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import {Grid,Slider} from '@material-ui/core';


export default function Footer(){
    return (
        <div className="footer">
        <div className="footer_left">
            <img src="https://logo-logos.com/wp-content/uploads/2018/02/Che_por_Jim_Fitzpatrick_white_red.png" alt="" className="footer_albumLogo"/>
            <div className="footer_songInfo">
                <h4>Yeah!</h4>
                <p>ft.Charan</p>
            </div>
        </div>

        <div className="footer_center">
<ShuffleOutlinedIcon className="footer_green" style={{ color : [292] }}/>
<SkipPreviousOutlinedIcon className="footer_icon"/>
<PlayCircleOutlineOutlinedIcon fontSize="large" className="footer_icon"/>
<SkipNextOutlinedIcon className="footer_icon"/>
<RepeatOutlinedIcon className="footer_icon" style={{ color : [292] }}/>
                </div>

        <div className="footer_right">
        <Grid container spacing={2}>
  <Grid  item >
    <PlaylistPlayIcon/>
  </Grid>
  <Grid  item >
    <VolumeDownIcon/>
  </Grid>
  <Grid  item>
      <Slider aria-labelledby="contineous-slide"/>
  </Grid>
</Grid>
            
                </div>
        </div>
    )
} 