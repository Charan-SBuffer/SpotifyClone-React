import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from "@material-ui/core";
import { useDataLayerValue } from './DataLayer';

export default function Header(){
    const [{user},dispatch] =useDataLayerValue();
return (
    <div className="header">

        <div className="header_left">

            <SearchIcon/><input placeholder="Search for Artists, Songs" type="text" />

            </div>
        <div className="header_right">

              <Avatar src={user?.images[0]?.url} alt={user?.name}/>   

             </div>
        
    </div>
)}