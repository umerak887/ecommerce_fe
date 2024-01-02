import React from "react";
import img from "../assets/avatar.png";
import { MdDashboard } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { IoAnalytics } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const modulesArray = [
    {
      name: "Dashboard",
      icon: <MdDashboard />,
      path: "/dashboard/home",
    },
    {
      name: "Products",
      icon: <CiBoxes />,
      path: "/dashboard/products",
    },
    {
      name: "Orders",
      icon: <IoCartOutline />,
      path: "/dashboard/orders",
    },
    {
      name: "Analytics",
      icon: <IoAnalytics />,
      path: "/dashboard/analytics",
    },
  ];
  return (
    <div className=" font-mono h-screen bg-slate-900 border-r-2 border-slate-400 flex flex-col justify-start items-start w-60">
      <div className="mx-auto mt-10 ">
        <img src={img} className="w-52 cursor-pointer " alt="" />
        <h1 className=" border-b rounded-sm border-white pb-2 text-3xl font-sans font-semibold text-slate-200 text-center mt-2 cursor-pointer">
          username
        </h1>
      </div>
      <div className="mt-8 w-full">
        <ul className=" text-slate-200 text-2xl font-semibold flex flex-col justify-center items-start">
          {modulesArray.map((ele, index) => (
            <div
              key={index}
              onClick={() => navigate(ele.path)}
              className="w-full px-5 my-2 py-4 cursor-pointer hover:bg-white hover:text-black  flex items-center gap-5"
            >
              {ele.icon}
              <li>{ele.name}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
