import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Shimmer from "./Shimmer";

const getVideos = async () => {
  const data = await fetch(YOUTUBE_VIDEOS_API);
  const json = await data.json();
  return json.items;
};
const VideoContainer = () => {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
    // staleTime: 10000,
  });

  if (isLoading) {
    return <Shimmer />;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
