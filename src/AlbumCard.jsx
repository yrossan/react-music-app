import React from "react";
import Album from "./assets/albums.json"
import Like from "./Likebutton"

import "./index.css"

export default function AlbumCard () {
    return(
        <div>
            {Album.map(album => {
                return (
                    <div className="AlbumContainer">
                        <img src={album.Icon}></img>
                        <p>{album.Album}</p>
                        <p>{album.Genre}</p>
                        <p>{album.Recorded}</p>
                        <Like></Like>
                        
                        
                        
                    </div>
                    
                )
            })}
        </div>




    )

}
