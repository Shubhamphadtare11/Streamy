import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { BiSearchAlt2, BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

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
    <div className="grid grid-flow-col p-2 m-2 md:p-5 md:m-2 shadow-lg sticky top-0 bg-white z-[1000]">
      <div className="flex col-span-1">
        <div className="w-[31px]">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer block"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKXjowOqsVBCCZ4Y4uSW8-7AqQemT3iTcbg&usqp=CAU"
        />
        </div>

        <a href="/">
          <img
            className="h-9 mx-2 hidden md:block"
            alt="Logo"
            src="https://raw.githubusercontent.com/keshavop/Streamy-Youtube-Clone/main/src/assests/logo_light_theme.webp"
          />
        </a>
      </div>
      <div className="col-span-10 px-5 md:px-10">
        <div className="flex h-[90%]">
          <input
            className="w-[85%] border border-gray-400 p-2 px-5 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-2 md:px-5 bg-gray-100  rounded-r-full">
          <IoSearch />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[25rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="flex py-2 px-3 shadow-sm hover:bg-gray-100">
                  <BiSearchAlt2 className="mt-2 mr-2" /> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center col-span-1 justify-around">
      <BiVideoPlus className="cursor-pointer md:h-8 h-5 mr-1 md:mr-3 text-2xl md:text-3xl" />
        <BsBell className="cursor-pointer md:h-8 h-5 mr-1 md:mr-3 text-2xl md:text-2xl" />
        <img
          className="cursor-pointer mr-1 md:h-8 h-5 md:mr-3"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user-logo"
        />
      </div>
    </div>
  );
};

export default Head;
