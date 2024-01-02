import React from "react";
import img from "../assets/auth_showcase.jpg";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-slate-100  h-screen w-screen flex justify-center items-center">
      <div className="lg:flex bg-gradient-to-r from-purple-500 to-blue-600 shadow-2xl rounded-xl mx-10">
        <div className="w-full lg:w-2/4 hidden md:flex">
          <img
            src={img}
            alt="Auth Showcase"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="p-4 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
