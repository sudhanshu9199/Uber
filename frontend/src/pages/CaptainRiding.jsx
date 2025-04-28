/* CaptainRiding.jsx */
import React, { useState, useEffect, useRef } from "react";
import map from "../assets/map_5.png";
import OtpVerificationPanel from "../components/OptVerificationPanel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const CaptainRiding = (props) => {
  const [showOtpPanel, setShowOtpPanel] = useState(false);
  const otpPanelRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    if (!otpPanelRef.current) return;
    gsap.to(otpPanelRef.current, {
      y: showOtpPanel ? "0%" : "100%", // Slide up/down
      opacity: showOtpPanel ? 1 : 0, // Fade in/out
      duration: 0.5,
      ease: "power2.inOut",
      // Important for initial state: panel starts off-screen
      onStart: () => {
        if (otpPanelRef.current && showOtpPanel) {
          otpPanelRef.current.style.visibility = "visible";
        }
      },
      onComplete: () => {
        if (otpPanelRef.current && !showOtpPanel) {
          otpPanelRef.current.style.visibility = "hidden";
        }
      },
    });
  }, [showOtpPanel]);

  const handleReachedClick = () => {
    console.log("Reached button clicked, opening OTP panel...");
    setShowOtpPanel(true);
  };

  const handleOtpVerification = (otp) => {
    console.log("Verfying OPT:", otp);
    const correctOtp = "1234"; // Example OTP
    if (otp === correctOtp) {
      alert("OTP Verified! Ride starting... 🎉");
      setShowOtpPanel(false); // Close panel on success
      // Add any logic needed after successful verification
      // e.g., navigate to an "Ongoing Ride" screen or update state
      navigate('/ride-in-progress');
    } else {
      alert("Incorrect OTP. Please try again. 😟");
    }
    setShowOtpPanel(false);
  };

  const handleCloseOtpPanel = () => {
    setShowOtpPanel(false);
    // If you want to navigate back to CaptainHome when closing OTP panel:
    // navigate('/captain-home'); // Assuming '/captain-home' is the route for CaptainHome.jsx
    // OR, use the props if navigation logic is handled higher up:
    // props.setConfirmRidePopUpPanel(false); // Reset previous state if needed
    // props.setRidePopupPanel(true); // Go back to RidePopUp state if applicable
    console.log("OTP Panel Closed");
  };

  // Function to handle back navigation from the header
  const handleBackClick = () => {
    // Navigate back or use props function based on your app structure
    // Example using props from CaptainHome:
    if (props.setConfirmRidePopUpPanel && props.setRidePopupPanel) {
      props.setConfirmRidePopUpPanel(false);
      props.setRidePopupPanel(true);
    } else {
      // Fallback navigation if props are not available
      navigate(-1); // Go back to the previous page in history
    }
    console.log("Back button clicked");
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden relative bg-gray-100">
      <header className="h-auto flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 shadow-lg bg-white z-1">
        <button
          onClick={handleBackClick}
          className="text-gray-600 hover:text-gray-800"
        >
          <i className="text-xl font-bold ri-arrow-left-long-line"></i>
        </button>
        <h1 className="font-bold text-lg text-gray-800">Pick up</h1>
        <div className="w-6"></div>
      </header>

      {/* Map */}
      <div className="flex-grow relative">
        <img
          className="absolute inset-0 h-94 w-full"
          src={map}
          alt="map showing pickup location"
        />
      </div>

      {/* Panel */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-xl transition-transform duration-300 ease-in-out transform overflow-hidden `}
      >
        <div
          onClick={() => {}}
          className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-300 pointer-events-none"
        ></div>

        {/* Top section */}
        <div
          className="p-4 cursor-pointer border-b border-gray-200"
          role="button"
          aria-controls="rifing-panel-content"
        >
          {/* Pickup Info Row */}
          <div className="flex items-center space-x-3 mb-3">
            <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            {/* Address */}
            <div>
              <p className="text-xs text-gray-500">Pick up at</p>
              <p className="text-base font-semibold text-gray-800">
                Mandar View Cottages, Ghatside, Rishikesh
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex justify-between items-center text-center">
            <div>
              <p className="text-xs text-gray-500 uppercase">EST</p>
              <p className="text-lg font-semibold text-gray-800">5 min</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Distance</p>
              <p className="text-lg font-semibold text-gray-800">2.2 km</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">fare</p>
              <p className="text-lg font-semibold text-gray-800">₹120.56</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-4 pb-4 overflow-y-auto w-full flex items-center justify-between gap-5">
          {/* Drop Off Button */}
          <button className="w-1/2 bg-yellow-400 hover:bg-yellow-500 transition-colors text-black font-bold py-3 px-4 rounded-lg my-4 text-sm uppercase tracking-wide">
            Drop Off
          </button>
          <button
            onClick={() => {
              handleReachedClick();
            }}
            className="w-1/2 bg-blue-400 hover:bg-blue-500 transition-colors text-black font-bold py-3 px-4 rounded-lg my-4 text-sm uppercase tracking-wide"
          >
            Reached
          </button>
          <div className="flex items-start space-x-3"></div>
          {/* Directions List */}
        </div>
        <div className="h-4"></div>
      </div>
      <div
        ref={otpPanelRef}
        // Initial state for animation: off-screen and hidden
        className="fixed inset-0 transform translate-y-full opacity-0 visibility-hidden z-50" //
        style={{ visibility: "hidden" }} // Ensure it's hidden initially
      >
        <OtpVerificationPanel
          onClose={handleCloseOtpPanel}
          onVerify={handleOtpVerification}
          otpLength={4}
        />
      </div>
    </div>
  );
};

export default CaptainRiding;
