const VideoCard = ({info}) => {
    
    const{snippet, statistics} = info;
    const{channelTitle, title, thumbnails} = snippet;

    return(
        <div>
            <img alt="thumbnail" src={thumbnails.medium.url} />
            <ul>
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    );
};

export default VideoCard;