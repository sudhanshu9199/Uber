import React from "react";
import carImage from "../assets/ev imgCrop.png";

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePanel(false);
          // props.setVehiclePanel(true);
        }}
        className="absolute top-1 right-2 text-xl font-bold"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-bold mb-5">Confirm your Ride</h3>
      <div className="flex flex-col justify-between items-center px-2 py-1">
        <img
          src={carImage}
          alt=""
          className="transform scale-x-[-1] h-50 rounded-xl"
        />
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
        <button onClick={() => {
          props.setVehicleFound(true);
          props.setConfirmRidePanel(false);
        }} className="w-full bg-green-700 text-gray-50 text-lg font-semibold py-2 mt-2">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
