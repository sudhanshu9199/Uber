import React from 'react'
import GirlUser from "../assets/usersPic/gril_user6.png";
const RidePopUp = (props) => {
  return (
    <div className='bottom-0 left-0 right-0 w-full bg-transparent flex justify-center p-4 pointer-events-none z-40'>
      {/* The actual card content */}
      <div className='bg-white w-full max-w-md rounded-t-2xl shadow-xl p-5 pointer-events-auto' >
        
        {/* Top Section: Driver Info, Price */}
        <div className='flex justify-between items-start mb-4' onClick={() => {
        props.setRidePopupPanel(false);
      }}>
          {/* Left: Profile pic, Name, and Tags */}
          <div className='flex items-center space-x-3'>
            <img src={GirlUser} alt={`'s profile`} className='w-12 h-12 rounded-xl object-cover border border-gray-200'/>
            <div>
              <p className='font-semibold text-lg text-gray-800'>Aditya Ratiu</p>
              <div className='flex space-x-2'>
                <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium bg-amber-400`}>UPI Pay</span>
                <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium bg-amber-400`}>Discount</span>
              </div>
            </div>
          </div>
          {/* Right: Price, Distance */}
          <div className='text-right'>
            <p className='text-xl font-bold text-gray-900'>₹150.36</p>
            <p className='text-sm text-gray-500 -mt-1'>2.2 km</p>
          </div>
        </div>

        <hr className='my-3 border-gray-200'/>

        {/* Middle Section: Pickup from / to Dropoff */}
        <div className='space-y-3 mb-5'>
          {/* PickUp */}
          <div>
            <p className='uppercase text-xs text-gray-500 font-medium tracking-wide -mb-0.5'>pick up</p>
            <p className='text-base font-medium text-gray-800'>Mandar View Cottages, Ghatside, Rishikesh</p>
          </div>
          {/* Dropoff */}
          <div>
            <p className='text-xs uppercase text-gray-500 font-medium tracking-wide -mb-0.5'>Drop Off</p>
            <p className="text-base font-medium text-gray-800">Neelkanth Villa, Forest Lane, Nainital</p>
          </div>
        </div>

        {/* Bottom section: Buttons */}
        <div className='flex space-x-3'>
          <button onClick={()=> {
            props.setRidePopupPanel(false);
          }} className='flex-1 py-3 px-4 rounded-lg text-center font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-gray-400' >
            Ignore
          </button>
          <button onClick={() => {
            props.setConfirmRidePopUpPanel(true);
            props.setRidePopupPanel(false);
          }} className='flex-1 py-3 px-4 rounded-lg text-center font-bold text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400'>Accept</button>
        </div>
      </div>

    </div>
  )
}

export default RidePopUp