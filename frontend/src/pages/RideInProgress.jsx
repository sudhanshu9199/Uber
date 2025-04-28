/* RideInProgress.Page.jsx */
import React from "react";
import mapCU from "../assets/map_6.png"; // Assuming this is the correct path to your image
import girlUser from "../assets/usersPic/gril_user9.png";
import { useNavigate } from "react-router-dom";

const RideInProgress = () => {
  const navigate = useNavigate();

  const handleCompleteRide = () => {
    console.log("Completing Ride...");
    // Add navigation or state update logic here
    alert("Ride Completed!"); // Placeholder feedback
    // Maybe navigate to a summary page: navigate('/ride-summary');
    navigate("/ride-completed");
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden relative">
      <header className="h-auto flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 shadow-lg bg-[#FFCD02] z-1">
        <button className="text-gray-600 hover:text-gray-800">
          <i className="text-xl font-bold ri-arrow-left-long-line"></i>
        </button>
        <h1 className="font-bold text-lg text-gray-800 uppercase">
          ride in progress
        </h1>
        <div className="w-15">2:18</div>
      </header>

      {/* Map */}
      <div className="flex-grow relative">
        <img
          className="absolute inset-0 h-85 w-full"
          src={mapCU}
          alt="map showing pickup location"
        />
      </div>

      <div className="relative bg-gray-300 rounded-t-4xl p-2.5 -mt-8 shadow-lg z-10 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          {/* Left Side: Profile Info */}
          <div className="flex items-center space-x-3 pb-3 border-b border-gray-200">
            <img
              src={girlUser}
              alt="user pic"
              className="w-14 h-14 rounded-sm drop-shadow-lg object-cover border-2 border-indigo-200"
            />
            <div>
              <p className="text-xs text-gray-500 font-medium">RIDER</p>
              <h2 className="font-bold text-lg text-gray-800">Priya Curtis</h2>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <i className="ri-flag-line text-red-500 text-xl"></i>
            <span className="text-gray-600">
              <span className="font-medium text-gray-800">Destination: </span>
              Hajipur
            </span>
          </div>
        </div>

        {/* Location Details */}
        <div className="space-y-2 mb-1">
          <div className="flex items-center space-x-2 text-sm">
            <i className="ri-map-pin-line text-green-500 text-xl"></i>
            <span className="text-gray-600">
              <span className="font-medium text-gray-800">Pickup: </span>
              Chandigarh University (CU)
            </span>
          </div>
        </div>

        <div className="bg-yellow-400 rounded-lg p-2 flex justify-around items-start text-center">
          {/* Hours Online */}
          <div className="flex flex-col items-center w-1/3">
            <i className="text-xl font-semibold text-gray-800 mb-1 ri-time-line"></i>
            <p className="font-bold text-base text-gray-900">18 mins</p>
            <p className="text-xs uppercase font-medium text-gray-700 leading-tight">
              ETA
            </p>
          </div>

          {/* Total Distance */}
          <div className="flex flex-col items-center w-1/3">
            <i className="text-xl text-gray-800 mb-1 ri-speed-up-fill"></i>
            <p className="font-bold text-base text-gray-900">8.2 KM</p>
            <p className="text-xs uppercase font-medium text-gray-700 leading-tight">
              Distance
            </p>
          </div>
        </div>

        <button
          onClick={handleCompleteRide}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold w-1/2 mt-1 py-3 px-4 shadow-lg text-sm uppercase tracking-wide flex items-center justify-center space-x-2 transition-colors"
        >
          <i className="ri-flag-2-line text-lg"></i>
          <span>Complete Ride</span>
        </button>
      </div>
    </div>
  );
};

export default RideInProgress;
