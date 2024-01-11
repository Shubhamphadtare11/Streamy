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
  ];

  return (
    <div className="flex flex-wrap">
      {listButtons.map((list, index) => (
        <Button name={list} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
