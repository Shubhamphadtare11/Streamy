import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(searchQuery);
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API Call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKXjowOqsVBCCZ4Y4uSW8-7AqQemT3iTcbg&usqp=CAU"
        />

        <a href="/">
          <img
            className="h-7 mx-2"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&usqp=CAU"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div className="flex">
          <input
            className="w-[71%] border border-gray-400 p-2 px-5 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 bg-gray-100  rounded-r-full">
            <img
              className="w-[20px]"
              alt="search-icon"
              src="https://img.icons8.com/?size=512&id=132&format=png"
            />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[25rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center col-span-1 justify-around">
        <img
          className="h-9 w-8 cursor-pointer"
          alt="recorder"
          src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/video-512.png"
        />
        <img
          className="h-9 cursor-pointer"
          alt="bell"
          src="https://img.icons8.com/?size=512&id=16008&format=png"
        />
        <img
          className="h-7 cursor-pointer"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODEUZaWd7WmVgrTxi7w3HS63qUTu3B79uUA&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
