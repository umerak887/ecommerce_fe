import React from "react";
import img from "../assets/auth_showcase.jpg";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
