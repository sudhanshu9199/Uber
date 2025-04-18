import React from "react";
import { Link } from "react-router-dom";
import homeBg from "../assets/home-bg2.png";
import uberLogo from "../assets/Uber-black-Logo.png";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full pt-9 bg-red-400 flex justify-between flex-col" style={{
          backgroundImage: `url(${homeBg})`,
          backgroundPosition: "bottom",
        }}>
        <img className="w-25 ml-8" src={uberLogo} alt="uber logo" />
        <div className="bg-blue-300 pb-7 px-4 py-4">
          <h2 className="text-2xl font-bold">Get Started with Uber</h2>
          <Link to="/login" className=" flex items-center justify-center w-full bg-black text-white py-3 mt-4 rounded-lg">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
