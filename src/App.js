import React, { useEffect } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

//const [token , setToken] = useState(null);

const [{ user , token , playlists , discover_Weekly } , dispatch ] = useDataLayerValue();

 useEffect (()=>{
const hash = getTokenFromUrl();
window.location.hash = " " ;
const _token =hash.access_token;

if(_token){

  dispatch({

    type : "SET_TOKEN",
    token : _token,

  })
  //setToken(_token);
  

  spotify.setAccessToken(_token);

  spotify.getMe().then(user =>{
    console.log('👴',user);
 
    dispatch({
      type : 'SET_USER',
      user  : user,
    });

  });

  spotify.getUserPlaylists().then( playlists => {
    dispatch({
      type : "SET_PLAYLIST",
     playlists : playlists,
    });    
  });

spotify.getPlaylist('37i9dQZEVXcMSf4nB0EmDa').then( (discover_weekly) => {
  dispatch({
    type : "SET_DISCOVER_WEEKLY",
    discover_weekly : discover_weekly,
  });
});

}
console.log("MY PLAYLIST 🎧" , playlists)
console.log("I Have A TOKEN 👉",token);
 },[]);

console.log("👴", user);
console.log("🧛‍♂️", token);
  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login/>
                )
      }

    </div>
  );
}

export default App;
