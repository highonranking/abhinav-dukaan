import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Navtop from "../components/Navtop";
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-1">
      <div className="w-[224px]  bg-custom-blue-800  ">
        <Sidebar />
      </div>
      <div className="w-full bg-custom-white-100 max-h-svh overflow-y-scroll">
        <Navtop title={pathname.split("/")[1]} />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
