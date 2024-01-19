import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import {YOUTUBE_VIDEO_BYID} from "../utils/constants"
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import "../styles/WatchPage.css"

const WatchPage = () => {
  
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const videoDetails = YOUTUBE_VIDEO_BYID + searchParams.get("v");
  const [videoInfo, setVideoInfo] = useState([]);

  useEffect(() => {
    const getVideoInfo = async () => {
      const data = await fetch(videoDetails);
      const json = await data.json();
      // console.log(json.items);
      setVideoInfo(json.items);
    };
    getVideoInfo();
  }, []);
  
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  
  return (
    <div className=" w-full">
      <div className="px-5 flex flex-col md:flex-row">
        <div>
        <div class="responsive-container static md:relative pt-0 md:pt-[56.25%]">
          <iframe class="responsive-iframe md:relative" style={{position:"unset"}}
            src={"https://www.youtube.com/embed/" + searchParams.get("v")+"?autoplay=1&mute=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        </div>
        <div>
          <LiveChat />
        </div>
      </div>
    
    </div>
  );
};

export default WatchPage;
