import React from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-slate-900 px-10 py-5 flex justify-between items-center w-screen shadow-xl">
      <h1 className="text-xl font-sans font-medium text-slate-200">
        Welcome to e-commerce store
      </h1>
      <button
        onClick={() => navigate("/auth/login")}
        className="bg-red-700 text-xl font-sans text-white py-1 text-center rounded-md mr-60 w-52"
      >
        Logout
      </button>
    </div>
  );
};

export default TopBar;
