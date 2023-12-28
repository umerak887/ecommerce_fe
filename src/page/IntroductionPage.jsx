import React from "react";
import logo from "../assets/ecommerce_logo.png";
import illustration from "../assets/ecommerce_illustration.jpg";
import { Link } from "react-router-dom";
const IntroductionPage = () => {
  return (
    <div className="h-screen w-screen">
      <div className=" mx-auto p-10 flex justify-center items-center">
        <div className="flex flex-col justify-center items-start gap-10 w-2/3">
          {/* <img src={logo} alt="ecommerce_logo" className=" w-72" /> */}
          <h1 className="text-8xl font-bold">E-commerce Virtual Store</h1>
          <div className="text-2xl flex flex-col justify-center items-start gap-5">
            <p className="">
              Discover a world of shopping excellence at our online emporium.
              Immerse yourself in an exquisite array of curated products,
              meticulously selected for their quality, style, and affordability.
              Elevate your lifestyle with our diverse offerings. Explore,
              indulge, and redefine your shopping experience with us today.
            </p>
            <Link to="/auth/signup">
              <button className=" font-bold text-white bg-gradient-to-r from-indigo-700 to-blue-700  p-5 rounded-full w-96 mt-5 hover:shadow-2xl">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-black w-3/4">
          <img src={illustration} className=" " alt="" />
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
