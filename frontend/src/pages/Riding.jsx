import React from "react";
import map from "../assets/ride_map.png";
import carImage from "../assets/ev img2.png";
import pulcerGirlDriver from "../assets/Drivers/pulcer_bike_driver_girl_3.png";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to='/home' className="fixed right-2 top-2 h-10 w-10 bg-white opacity-75 flex items-center justify-center rounded-full" >
            <i className="text-lg opacity-100 font-bold ri-home-5-line"></i>
        </Link>
      <div className="h-1/2">
        <img src={map} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="h-1/2 px-2">
        <div className="flex flex-row items-center py-2">
          {/* Driver Picture & Car Image Stack - Achieved with positioning */}
          <div className="w-[70px] h-[70px] rounded-full relative flex items-center justify-center mr-2 overflow-hidden">
            <img
              src={pulcerGirlDriver}
              className="w-full h-full absolute object-cover scale-140 top-3"
              alt="Driver"
            />
          </div>
          {/* Driver Details */}
          <div className="flex-grow ml-4 flex flex-col text-right justify-center">
            <p className="m-0 font-bold text-lg text-black">SANTANU</p>
            <p className=" font-bold text-xl text-black tracking-tight">
              MH 12 AB 1234
            </p>
            <p className="-mt-1 text-gray-600 text-sm">White Mahindra XUV700</p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center gap-5 border-b-2 p-2 border-gray-500">
            <i className="text-lg ri-map-pin-fill"></i>
            <div className="">
              <h3 className="text-lg font-semibold -mb-1">563/11-A</h3>
              <p className="text-sm font-medium">Ram pur Talam, Mumbai</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2">
            <i className="text-lg ri-cash-line"></i>
            <div className="">
              <h3 className="text-lg font-semibold -mb-1">₹ 192.05</h3>
              <p className="text-sm font-medium">Cash</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="w-1/2 bg-black text-gray-50 text-lg font-semibold py-2 mt-2">
            Make a payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
