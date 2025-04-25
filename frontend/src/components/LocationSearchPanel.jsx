import React from "react";

const LocationSearchPanel = (props) => {

  const locations = [
    "Maa Tara Lane, Near Panchayat Bhawan, Hajipur",
    "Shivam Nagar, Post Office Wali Gali, Patna",
    "Rajputana Colony, Near Old Fort, Jaipur",
    "Nandini Vihar, Near Mango Market, Ranchi",
    "Chaitanya Residency, Gali No. 3, Amritsar",
    "Radha Garden, Near Shakti Mandir, Gorakhpur",
    "Om Shiv Path, Beside Police Line, Gaya",
    "Sunita Villa Road, Behind Bus Stand, Jamshedpur",
    "Dhanvantri Enclave, Purana Hospital Ke Paas, Raipur"
  ]
  return (
    <div>
      {/* Sample location data */}
      {
        locations.map((elemt, idx) => {
          return <div key={idx} onClick={() => {
            props.setVehiclePanel(true);
            props.setSlideOpen(false);
          }} className="flex items-center justify-start gap-2 mb-2 border-2 p-3 rounded-xl border-white active:border-gray-900">
          <h2 className="bg-[#eee] px-1 rounded-full flex items-center justify-center">
            <i className="ri-map-pin-fill text-xl"></i>
          </h2>
          <h4 className="font-medium">
            {elemt}
          </h4>
        </div>
        })
      }
    </div>
  );
};

export default LocationSearchPanel;
