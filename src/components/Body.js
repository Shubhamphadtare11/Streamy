import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import "../index.css";

const Body = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div className="bodyOutlet px-[0px] md:px-[45px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
