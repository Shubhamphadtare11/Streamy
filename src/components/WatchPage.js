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
      <div className="px-5 flex ">
        <div>
          <iframe
            width="850"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
        {videoInfo.map((video) => {
            return (
              <>
                {/* Subscriber Section */}
                <div key={video.id}>
                  <h1 className="font-bold text-xl m-2">
                    {video?.snippet?.title}
                  </h1>
                  <div className="flex">
                    <div className="flex m-2">
                      <FaUserTie className="rounded-full mt-1 border border-gray-400 text-4xl" />
                      <ul>
                        <li className="font-bold text-gray-800 ml-2">
                          {video?.snippet?.channelTitle}
                        </li>
                        <li className=" text-sm ml-2">2.56M Subscribers</li>
                      </ul>
                      <p className="flex">
                        <button className="bg-black text-white border border-gray-200 shadow-sm px-5 py-1 rounded-full m-2 ml-5">
                          Subscribe
                        </button>
                        <button className="border flex border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ml-32">
                          <FiThumbsUp className="mx-3 mt-1" />{" "}
                          {video?.statistics?.likeCount} |{" "}
                          <FiThumbsDown className="mx-3 mt-1" />
                        </button>
                        <button className=" flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
                          <PiShareFat className="mx-2 mt-1 text-xl" /> Share
                        </button>
                        <button className="flex border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
                          <GoDownload className="mx-1 text-xl" /> Download
                        </button>
                        <button className="border border-gray-200 shadow-sm px-2 py-1 bg-gray-200 rounded-full m-2 hover:bg-gray-300 ">
                          <BsThreeDots />
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Video Details Section */}
                <div className="m-2 rounded-lg shadow-sm bg-gray-100 p-2 ">
                  <p className="font-bold">
                    {video?.statistics?.viewCount} Views 😎{" "}
                    {video?.snippet?.publishedAt}
                  </p>
                  <p>{video?.snippet?.description}</p>
                </div>
                {/* Comment Section */}
                <div className="mt-5">
                  <h1 className="m-2  font-bold text-2xl">
                    {video?.statistics?.commentCount} Comments.
                  </h1>
                </div>
                
              </>
            );
          })}

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
