import React from "react";
import girlUser from "../assets/usersPic/gril_user10.png";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg font-sans flex flex-col min-h-[90vh] md:min-h-0">
      <header className="flex items-center justify-between p-4 border-b shadow-lg border-gray-200">
        <button onClick={()=> {
            props.setConfirmRidePopUpPanel(false);
            props.setRidePopupPanel(true);
        }} className="text-gray-600 hover:text-gray-800">
          <i className="text-xl font-bold ri-arrow-left-long-line"></i>
        </button>
        <h1 className="font-semibold text-lg text-gray-800">#00001</h1>
        <div className="w-6"></div>
      </header>

      {/* Main Content Area */}
      <div className="p-4 flex-grow">
        {/* Rider Info  */}
        <section className="flex items-start justify-between mb-3.5">
          <div className="flex items-center space-x-3">
            <img
              src={girlUser}
              alt="user pic"
              className="w-14 h-14 rounded-xl object-cover border border-gray-200"
            />
            <div>
              <p>Nayantara</p>
              <div className="flex space-x-1 -mt-0.5">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-sm font-medium bg-amber-400`}
                >
                  UPI Pay
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-sm font-medium bg-amber-400`}
                >
                  Discount
                </span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="font-bold text-lg text-gray-900">₹153.55</p>
            <p className="text-sm text-gray-500">2.2 km</p>
          </div>
        </section>

        {/* Pickup */}
        <section className="mb-6">
          <p className="text-xs text-gray-500 uppercase font-medium -mb-0.5">
            pick up
          </p>
          <p className="text-gray-800 font-medium">
            Mandar View Cottages, Ghatside, Rishikesh
          </p>
        </section>

        {/* Dropoff */}
        <section className="mb-6">
          <p className="text-xs text text-gray-500 uppercase font-medium -mb-0.5">
            drop off
          </p>
          <p className="text-gray-800 font-medium">
            Neelkanth Villa, Forest Lane, Nainital
          </p>
        </section>

        {/* Notes */}
        <section className="mb-6">
          <p className="text-xs text-gray-500 uppercase font-medium -mb-0.5">
            Noted
          </p>
          <div className="max-h-15 overflow-y-auto pr-2">
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illo
            ab natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum cumque nostrum, quisquam perspiciatis obcaecati rem suscipit ipsa vero rerum quos commodi itaque, aliquam veniam velit quae fugiat totam eum cupiditate tempore. Optio hic explicabo earum voluptatibus alias possimus facilis harum ea accusamus exercitationem qui quibusdam, natus, aut cupiditate modi.
          </p>
          </div>
        </section>

        {/* Trip Fare */}
        <section className="mb-6">
          <p className="text-xs text-gray-500 uppercase font-medium mb-1">
            Trip Fare
          </p>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <p className="text-gray-600">UPI Pay</p>
              <p className="text-gray-800">₹139.58</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-600">Discount</p>
              <p className="text-gray-800">₹13.97</p>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-2 pt-2">
            <div className="flex justify-between text-sm font-semibold">
              <p className="text-gray-700">paid amount</p>
              <p className="text-gray-900">₹153.55</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 -my-1">
          {/* Message btn */}
          <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-150 ease-in-out">
            <i className=" w-5 h-5 mb-1 ri-message-2-fill"></i>
            <span className="text-sm font-medium">Message</span>
          </button>
          {/* Cancel Button */}
          <button onClick={()=> {
            props.setConfirmRidePopUpPanel(false);
            props.setRidePopupPanel(true);
          }} className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 transition duration-150 ease-in-out">
            <i className="w-5 h-5 mb-1 ri-delete-bin-5-fill"></i>
            <span className="text-sm font-medium">Cancel</span>
          </button>
        </section>
      </div>

      {/* Footer btn area */}
      <div className="p-4 border-t border-gray-200 mt-auto">
        <Link to='/captain-riding' className="w-full flex justify-center bg-yellow-500 text-white py-3 px-4 rounded-lg font-semibold uppercase text-sm trackingwider hover:bg-yellow-600 transition duration-150 ease-in-out">
            Go to Pick Up
        </Link>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
