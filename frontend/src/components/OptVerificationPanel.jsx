/* OtpVerificationPanel.Components.jsx */
import React, { useState, useEffect } from "react";
import "../OtpVerificationPanel.css"; // Import your CSS file here

const OtpVerificationPanel = ({ onClose, onVerify, otpLength = 4 }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  // Handle number btn clicks
  const handleNumberClick = (digit) => {
    setError("");
    if (otp.length < otpLength) {
      setOtp(otp + digit);
    }
  };

  // Handle backspace click
  const handleBackspaceClick = () => {
    setError("");
    setOtp(otp.slice(0, -1));
  };

  const handleVerifyClick = () => {
    if (otp.length === otpLength) {
      setError("");
      console.log("Verifying OTP:", otp);
      onVerify(otp);
      setOtp("");
    } else {
      setError(`Please enter all ${otpLength} digits.`);
      console.log("OTP length is not correct");
    }
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key >= "0" && event.key <= "9") {
        handleNumberClick(event.key);
      } else if (event.key === "Backspace") {
        handleBackspaceClick();
      } else if (event.key === "Enter") {
        if (otp.length === otpLength) {
          handleVerifyClick();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [otp, otpLength]);

  return (
    <div className="fixed inset-0 z-2 flex flex-col bg-red-300">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Panel Content */}
      <div className="relative flex flex-col h-full bg-white">
        {/* Header */}
        <div className="p-4 pt-6 text-center border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-2.5 left-4 text-gray-500 hover:text-gray-700 text-2xl"
            aria-label="Close OTP Panel"
          >
            <i className="ri-close-circle-line"></i>
          </button>
          <h2 className="text-xl font-bold text-gray-800">Ride Verification</h2>
          <p className="text-sm text-gray-500 mt-1">Enter your OTP code here</p>
        </div>

        {/* OTP input display */}
        <div className="flex justify-center space-x-3 my-6 px-4">
          {[...Array(otpLength)].map((_, index) => (
            <div key={index} className="w-12 h-14 flex flex-col items-center">
              <div className="flex items-center justify-center h-full text-3xl font-semibold text-gray-700">
                {otp[index] || ""} {/* Display digit or empty */}
              </div>
              {/* Underline - changes color based on input focus simulation */}
              <div
                className={`h-1 w-full mt-1 ${
                    index === otp.length ? "bg-blue-500" : "bg-gray-400" // Highlight next input visually
                  } ${ otp.length === otpLength && index === otpLength-1 ? "bg-blue-500" : ""}` } // keep last highlighted when full // keep last highlighted when full
              ></div>
            </div>
          ))}
        </div>

        {/* Error Message Display */}
        {error && (
          <p className="text-center text-red-500 text-sm mb-4 px-4">{error}</p>
        )}

        {/* Verify btn */}
        <div className="px-6 mb-4">
          <button
            onClick={handleVerifyClick}
            className="w-full py-3 px-4 rounded-lg text-white font-semibold uppercase tracking-wider text-sm transition-colors bg-yellow-500 hover:bg-yellow-600"
          >
            Verify Now
          </button>
        </div>

        {/* Numpad */}
        {/* Spacer before Keypad */}
        <div className="flex-grow"></div>

        {/* Numeric Keypad */}
        <div className="grid grid-cols-3 gap-px bg-gray-200 pt-px">
          {/* Row 1 */}
          <button onClick={() => handleNumberClick("1")} className="keypad-btn">
            1
          </button>
          <button onClick={() => handleNumberClick("2")} className="keypad-btn">
            2
          </button>
          <button onClick={() => handleNumberClick("3")} className="keypad-btn">
            3
          </button>
          {/* Row 2 */}
          <button onClick={() => handleNumberClick("4")} className="keypad-btn">
            4
          </button>
          <button onClick={() => handleNumberClick("5")} className="keypad-btn">
            5
          </button>
          <button onClick={() => handleNumberClick("6")} className="keypad-btn">
            6
          </button>
          {/* Row 3 */}
          <button onClick={() => handleNumberClick("7")} className="keypad-btn">
            7
          </button>
          <button onClick={() => handleNumberClick("8")} className="keypad-btn">
            8
          </button>
          <button onClick={() => handleNumberClick("9")} className="keypad-btn">
            9
          </button>
          {/* Row 4 */}
          <div className="bg-gray-100"></div> {/* Placeholder */}
          <button onClick={() => handleNumberClick("0")} className="keypad-btn">
            0
          </button>
          <button onClick={handleBackspaceClick} className="keypad-btn text-xl">
            <i className="ri-delete-back-2-line"></i> {/* Backspace Icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationPanel;
