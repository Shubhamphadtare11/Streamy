import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const listButtons = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "News", 
    "Cooking",
    "Soccer",
    "WWE",
    "Valentine",
    "Tennis",
    "Entertainment",
    "Bollywood",
  ];

  return (
    <div className="overflow-x-scroll sm:overflow-x-auto w-80 sm:w-full">
    <div className="flex sm:flex-wrap">
      {listButtons.map((list, index) => (
        <Button name={list} key={index} />
      ))}
    </div>
    </div>
  );
};

export default ButtonList;
