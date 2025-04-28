import React from "react";
import carGirlDriver from "../assets/Drivers/car_driver_girl_2.png";


const CaptainDetails = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        {/* Left Side: Profile Info */}
        <div className="flex items-center space-x-3">
          <img
            src={carGirlDriver}
            alt=""
            className="w-14 h-14 rounded-full border-2 border-gray-200 object-cover"
          />
          <div>
            <h2 className="font-bold text-lg text-gray-800">Jeremiah Curtis</h2>
            <p className="text-sm text-gray-500">Basic level</p>
          </div>
        </div>

        {/* Right Side: Earnings */}
        <div className="text-right">
          <p className="font-bold text-xl text-gray-800">₹325.00</p>
          <p className="text-xs text-gray-500">Earned</p>
        </div>
      </div>

      <div className="bg-yellow-400 rounded-lg p-4 flex justify-around items-start text-center">
        {/* Hours Online */}
        <div className="flex flex-col items-center w-1/3">
          <i className="text-2xl font-semibold text-gray-800 mb-1 ri-time-line"></i>
          <p className="font-bold text-lg text-gray-900">10.2</p>
          <p className="text-xs uppercase font-medium text-gray-700 leading-tight">
            Hours Online
          </p>
        </div>

        {/* Total Distance */}
        <div className="flex flex-col items-center w-1/3">
          <i className="text-2xl text-gray-800 mb-1 ri-speed-up-fill"></i>
          <p className="font-bold text-lg text-gray-900">30 KM</p>
          <p className="text-xs uppercase font-medium text-gray-700 leading-tight">
            Total Distance
          </p>
        </div>

        {/* Total Jobs */}
        <div className="flex flex-col items-center w-1/3">
          <i className="text-2xl font-semibold text-gray-800 mb-1 ri-file-text-line"></i>
          <p className="font-bold text-lg text-gray-900">20</p>
          <p className="text-xs uppercase font-medium text-gray-700 leading-tight">
            Total Jobs
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
