/* RideCompleted.Page.jsx */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const RideCompleted = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const formatDateTime = (date) => {
    return date.toLocaleString("en-IN", {
      // Use appropriate locale
      dateStyle: "short",
      timeStyle: "short",
    });
  };

  const rideDetails = {
    pickupLocation: "Chandigarh University Main Gate",
    dropoffLocation: "Hajipur",
    startTime: new Date(Date.now() - 18 * 60000), // Approx. 18 mins ago
    endTime: new Date(), // Current time
    duration: "18 minutes",
    distance: "12.5 km", // Optional
    fare: "₹250.00",
    riderName: "Priya Sharma", // Assuming this is the *rider's* name (passenger)
    // If it's the captain/driver, adjust the label.
  };

  const rideDateTime = `${formatDateTime(
    rideDetails.startTime
  )} - ${rideDetails.endTime.toLocaleTimeString("en-IN", {
    timeStyle: "short",
  })}`;

  const handleGoToCaptainHome = () => {
    // Navigate to the appropriate dashboard
    navigate("/captain-home");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Ride Completed ✅</h1>
        <p className="text-gray-600">Here are the details of your last ride.</p>
      </header>

        {/* Main Summary Card */}
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md mb-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-700">Ride Summary</h2>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-center">
            <span className="text-red-500 mr-2 text-lg">🚩</span>
            <strong>Pickup:</strong>&nbsp;{rideDetails.pickupLocation}
          </p>
          <p className="flex items-center">
            <span className="text-green-500 mr-2 text-lg">🏁</span>
            <strong>Drop-off:</strong>&nbsp;{rideDetails.dropoffLocation}
          </p>
          <p className="flex items-center">
            <i className="ri-calendar-2-line mr-2 text-lg text-blue-500"></i>
            <strong>Date & Time:</strong>&nbsp;{rideDateTime}
          </p>
          <p className="flex items-center">
            <i className="ri-time-line mr-2 text-lg text-purple-500"></i>
            <strong>Duration:</strong>&nbsp;{rideDetails.duration}
          </p>
          {rideDetails.distance && (
            <p className="flex items-center">
              <i className="ri-road-map-line mr-2 text-lg text-orange-500"></i>
              <strong>Distance:</strong>&nbsp;{rideDetails.distance}
            </p>
          )}

          <p className="flex items-center text-lg font-bold text-green-600 mt-3 pt-3 border-t">
            <i className="ri-money-rupee-circle-line mr-2 text-xl"></i>
            <strong>Total Fare:</strong>&nbsp;{rideDetails.fare}
          </p>
        </div>
      </div>

      {/* Rider Info Card (Assuming this is the passenger) */}
      <div className="bg-white shadow-xl rounded-lg p-4 w-full max-w-md mb-8 border border-gray-200">
         <h2 className="text-lg font-semibold mb-2 text-gray-700 flex items-center">
           <i className="ri-user-line mr-2 text-lg"></i> Rider Info
         </h2>
         <p className="text-gray-700">
           <strong>🧑‍💼 Name:</strong>&nbsp;{rideDetails.riderName}
         </p>
      </div>

      {/* Actions */}
      <div className="w-full max-w-md">
        <button
          onClick={handleGoToCaptainHome}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center space-x-2 text-lg"
        >
          <i className="ri-home-4-line"></i>
          <span>Go to Dashboard</span>
        </button>
      </div>
    </div>
  );
};

export default RideCompleted;
