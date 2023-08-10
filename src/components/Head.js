import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
      dispatch(toggleMenu());  
    };

    return(
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img onClick={() => toggleMenuHandler()} 
                className="h-8 cursor-pointer" alt="menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKXjowOqsVBCCZ4Y4uSW8-7AqQemT3iTcbg&usqp=CAU" />

                <a href="/">
                <img className="h-8 mx-2" alt="youtube-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh5tBSHNb7p7uqezXqhb7zyxwQxX2nUtWR0A&usqp=CAU" />
                </a>
            </div>
            <div className="col-span-10 text-center">
                <input 
                className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
                <button 
                className="border border-gray-400 px-5 bg-gray-100 py-2 rounded-r-full">🔍</button>
            </div>
            <div className="col-span-1">
                <img className="h-8" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODEUZaWd7WmVgrTxi7w3HS63qUTu3B79uUA&usqp=CAU" />
            </div>
        </div>
    );
};

export default Head;