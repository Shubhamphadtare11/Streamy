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
    <div className="flex">
      {listButtons.map((list) => (
        <Button name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
