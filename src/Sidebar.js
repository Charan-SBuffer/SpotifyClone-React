import React from "react"
import "./Sidebar.css"
import SidebarOption from "./SidebarOption"
import AddBoxIcon from '@material-ui/icons/AddBox';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryAddOutlinedIcon from '@material-ui/icons/LibraryAddOutlined';
import {useDataLayerValue} from './DataLayer';

function Sidebar(){
    const[{playlists}, dispatch] = useDataLayerValue();
return(
    <div className="sidebar">
        <img className="sidebar_logo" src="Https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>
        
        <SidebarOption Icon={HomeOutlinedIcon} title="Home"/>
        <SidebarOption Icon={SearchOutlinedIcon} title="Search"/>
        <SidebarOption Icon={LibraryAddOutlinedIcon} title="Library"/>
<br/>
<strong className="sidebar_title">PLAYLISTS</strong>
<div className="sidebar_options">
<AddBoxIcon/> <strong>Create Playlist</strong>
</div>
<hr/>

{playlists?.items?.map((playlist) => (
    <SidebarOption title={playlist.name}/>
))}

    </div>


)
}

export default Sidebar;