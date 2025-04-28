import React from "react";
/* Images collection start */
import carIcon from "../assets/car img2.png";
import bikeIcon from "../assets/bike_with_helmet img2.png";
import autoIcon from "../assets/auto ricksaw img2.png";
import evIcon from "../assets/ev img2.png";
import premiumCarIcon from "../assets/premium img2.png";
/* Images collection End */

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="absolute top-1 right-2 text-xl font-bold"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-bold mb-5">Choose your comfort</h3>

      <div onClick={() => {
        props.setConfirmRidePanel(true)
        props.setVehiclePanel(false);
      }} className="flex items-center justify-between border-2 border-gray-200 active:border-gray-600 rounded-lg p-1.5 mb-2">
        <img
          className="w-20"
          src={carIcon}
          alt="normal car"
          style={{ transform: "scaleX(-1)" }}
        />
        <div className="w-1/2">
          <h4 className="font-bold text-lg">
            UberGo{" "}
            <span className="font-medium text-sm">
              <i className="font-medium text-sm ri-group-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-700">
            Affordable, compact rides
          </p>
        </div>
        <h2 className=" text-xl font-semibold">₹123.20</h2>
      </div>

      <div onClick={() => {
        props.setConfirmRidePanel(true)
        props.setVehiclePanel(false);
      }} className="flex items-center justify-between border-2 border-gray-200 active:border-gray-600 rounded-lg p-1.5 mb-2">
        <img
          className="w-20"
          src={bikeIcon}
          alt="normal car"
          style={{ transform: "scaleX(-1)" }}
        />
        <div className="w-1/2">
          <h4 className="font-bold text-lg">
            Moto{" "}
            <span className="font-medium text-sm">
              <i className="font-medium text-sm ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">1 mins away</h5>
          <p className="font-normal text-xs text-gray-700">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className=" text-xl font-semibold">₹25.08</h2>
      </div>

      <div onClick={() => {
        props.setConfirmRidePanel(true)
        props.setVehiclePanel(false);
      }} className="flex items-center justify-between border-2 border-gray-200 active:border-gray-600 rounded-lg p-1.5 mb-2">
        <img
          className="w-20"
          src={autoIcon}
          alt="normal car"
          style={{ transform: "scaleX(-1)" }}
        />
        <div className="w-1/2">
          <h4 className="font-bold text-lg">
            UberAuto{" "}
            <span className="font-medium text-sm">
              <i className="font-medium text-sm ri-group-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-700">
            Affordable, Auto ride
          </p>
        </div>
        <h2 className=" text-xl font-semibold">₹10.00</h2>
      </div>

      <div onClick={() => {
        props.setConfirmRidePanel(true)
        props.setVehiclePanel(false);
      }} className="flex items-center justify-between border-2 border-gray-200 active:border-gray-600 rounded-lg p-1.5 mb-2">
        <img
          className="w-20"
          src={evIcon}
          alt="normal car"
          style={{ transform: "scaleX(-1)" }}
        />
        <div className="w-1/2">
          <h4 className="font-bold text-lg">
            EV Car{" "}
            <span className="font-medium text-sm">
              <i className="font-medium text-sm ri-group-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">6 mins away</h5>
          <p className="font-normal text-xs text-gray-700">
            Affordable, compact, EcoFriendly rides
          </p>
        </div>
        <h2 className=" text-xl font-semibold">₹193.13</h2>
      </div>

      <div onClick={() => {
        props.setConfirmRidePanel(true)
        props.setVehiclePanel(false);
      }} className="flex items-center justify-between border-2 border-gray-200 active:border-gray-600 rounded-lg p-1.5 mb-2">
        <img
          className="w-20"
          src={premiumCarIcon}
          alt="normal car"
          style={{ transform: "scaleX(-1)" }}
        />
        <div className="w-1/2">
          <h4 className="font-bold text-lg">
            UberPremimum{" "}
            <span className="font-medium text-sm">
              <i className="font-medium text-sm ri-group-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">7 mins away</h5>
          <p className="font-normal text-xs text-gray-700">
            Luxury, most compact rides
          </p>
        </div>
        <h2 className=" text-xl font-semibold">₹303.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
