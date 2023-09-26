const VideoCard = ({info}) => {
    
    const{snippet, statistics} = info;
    const{channelTitle, title, thumbnails} = snippet;
    //as seen above we have destructured snippet one more time from same api

    return(
        <div className="p-2 m-2 w-72">
            <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} /> 
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    );
};

export default VideoCard;