import React from "react";
import {
  MdStar,
  MdSend,
  MdShield,
  MdCall,
  MdLocationPin,
} from "react-icons/md";
import { IoShareOutline } from "react-icons/io5";

import carImage from "../assets/ev img.png";
import bikeImage from "../assets/bike_with_helmet img2.png";

// --- Reusable Action Button Component ---
const ActionButton = ({ IconComponent, label }) => (
  <div className="flex flex-col items-center text-center max-w-[80px]">
    <div className="bg-blue-100 w-12 h-12 rounded-full flex justify-center items-center mb-2">
      {IconComponent ? (
        <IconComponent size={22} className="text-blue-500" />
      ) : (
        <span className="text-3xl">?</span>
      )}{" "}
      {/* Placeholder if no icon */}
    </div>
    <p className="m-0 text-sm text-gray-800">{label}</p>
  </div>
);



const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.WaitingForDriver(false);
          // props.setVehiclePanel(true);
        }}
        className="absolute top-1 right-2 text-xl font-bold"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>

      {/* <div className="flex flex-col justify-between items-center px-2 py-1">
        <div className="w-full">
          <div className="flex items-center gap-5 border-b-2 p-2 border-gray-500">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div className="">
              <h3 className="text-lg font-semibold -mb-1">563/11-A</h3>
              <p className="text-sm font-medium">Ram pur Talam, Mumbai</p>
            </div>
          </div>
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
      </div> */}
      <div className="flex flex-row items-center py-2">
        {/* Driver Picture & Car Image Stack - Achieved with positioning */}
        <div className="w-[150px] h-[70px] relative flex items-center justify-center mr-2">
          <img
            src={carImage}
            className="w-[70px] h-[70px] rounded-full absolute left-0 z-10 object-cover"
            alt="Driver"
          />
          <img
            src={bikeImage}
            className="w-[81px] h-[60px] absolute left-[38px] z-0 object-cover transform scale-x-[-1]"
            alt="Car"
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
      {/* Rating */}
      <div className="flex flex-row items-center justify-end ml-2 -mt-2">
        <span role="img" aria-label="star" className="mr-1 text-xl text-black">
          ⭐
        </span>
        <span className="font-bold text-lg text-black">4.9</span>
      </div>

      <div className="flex w-75 items-center bg-gray-200 rounded-full py-1 px-4">
        <input
          type="text"
          placeholder="Send a message..."
          className="flex-grow border-none outline-none bg-transparent text-lg text-black mr-2 py-2"
        />
        <span
          role="img"
          aria-label="send"
          className="text-gray-600 cursor-pointer text-xl"
        >
          ➤
        </span>
      </div>

      <div className="flex flex-row justify-around bg-gray-100 rounded-lg py-2">
          <ActionButton
            IconComponent={MdShield}
            label="Safety"
          />
          <ActionButton
            IconComponent={IoShareOutline}
            label="Share my trip"
          />
        <ActionButton
          IconComponent={MdCall}
          label="Call driver"
        />
      </div>

      <div className="flex flex-grow items-start pt-2">
        <span role="img" aria-label="location pin" className="mr-3 mt-1 text-lg font-bold"><i className="ri-map-pin-line"></i></span>
        <div className="flex-grow">
            <p className="m-0 font-bold text-lx text-black">562/11-A</p>
            <p className="text-sm text-gray-600">Kailkondrahalli, Bengaluru, Karnataka</p>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
