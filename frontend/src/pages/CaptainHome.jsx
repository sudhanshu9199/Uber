import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react"; // ⚡ also make sure you imported useGSAP
import { gsap } from "gsap";
import map from "../assets/ride_map.png";
import captainUberLogo from "../assets/uber-captain-logo2-1.png";
import {
  FaMapMarkerAlt,
  FaEye,
  FaClock,
  FaTachometerAlt,
  FaFileAlt,
  FaLocationArrow,
} from "react-icons/fa";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopUpPanelRef = useRef(null)

    useGSAP(()=> {
      if(ridePopupPanel){
        gsap.to(ridePopupPanelRef.current, {
          transform: 'translateY(0%)',
          duration: 0.6,
          ease: "power2.inOut",
        })
      }
      else{
        gsap.to(ridePopupPanelRef.current, {
          transform: 'translateY(100%)',
          duration: 0.5,
          ease: "power2.inOut",
        })
      }
    }, [ridePopupPanel])

    useGSAP(()=> {
      if(confirmRidePopUpPanel){
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: 'translateY(0%)',
          duration: 0.6,
          ease: "power2.inOut",
        })
      }
      else{
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: 'translateY(100%)',
          duration: 0.5,
          ease: "power2.inOut",
        })
      }
    }, [confirmRidePopUpPanel])


  return (
    <div className="min-h-screen bg-gray-200 flex flex-col font-sans">
      <div className="fixed p-2 top-0 flex justify-between w-screen z-10">
        <img className="w-16 opacity-90" src={captainUberLogo} alt="captain Logo" />
        <Link
          to="/home"
          className="h-10 w-10 bg-white/70 flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-bold ri-logout-box-r-line"></i>
        </Link>
      </div>
      {/* 1. Map Section */}
      <div className="relative flex-grow h-[60vh] bg-gray-300">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${map})` }}
        ></div>

        {/* Yellow Zone Circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-yellow-300 rounded-full opacity-50 z-0"></div>

        {/* Central Marker (Driver Location) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <FaLocationArrow className="text-black text-3xl transform -rotate-45" />
          </div>
          <div className="text-center text-black font-semibold mt-1 text-xs">
            CITY CENTER
          </div>
        </div>

        {/* Map Overlay Button (Eye Icon) */}
        <button className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-md z-11 hover:bg-gray-100 transition-colors px-2 py-1">
          <i className="text-gray-700 text-xl ri-crosshair-2-fill"></i>
        </button>
      </div>

      {/* 2. Driver Info Card */}
      <div className="relative bg-white rounded-t-2xl p-5 -mt-8 shadow-lg z-10 flex flex-col">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopupPanelRef}
        
        className="fixed w-full bottom-0 z-11 px-2 py-6 bg-gray-300/50 translate-y-full"
      >
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>

      <div
        ref={confirmRidePopUpPanelRef}
        
        className="fixed w-full bottom-0 z-11 px-2 py-6 bg-gray-300/50 translate-y-full"
      >
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
