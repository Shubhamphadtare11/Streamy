import React from "react";
import nFormatter from "../utils/nFormatter";

const VideoCard = ({info}) => {
    
    const{snippet, statistics} = info;
    const{channelTitle, title, thumbnails} = snippet;
    //as seen above we have destructured snippet one more time from same api

   
    return(
        <div className="p-2 m-2 w-72">
            <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} /> 
            <ul>
                <li  className="font-bold py-1 ">
                {title.length > 45 ? title.slice(0, 45) + "..." : title}
                </li>
                <li className="text-xs">{channelTitle}</li>
                <li className="text-xs">{nFormatter(statistics.viewCount)} views</li>
            </ul>
        </div>
    );
};

export default VideoCard;