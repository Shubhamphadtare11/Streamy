import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import '../index.css';

const Body = () => {
    return(
<div className="flex">
    <Sidebar/>
    <div className="bodyOutlet">
    <Outlet/>
    </div>
</div>
    );  
};

export default Body;