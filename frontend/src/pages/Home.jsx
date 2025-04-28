import React, { useEffect, useRef, useState } from "react";
import uberLogo from "../assets/Uber-black-Logo.png";
import homeMap from "../assets/home-map-temp.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";


const Home = () => {
  const [pickUp, setPickUp] = useState("")
  const [destination, setDestination] = useState("")
  const [slideOpen, setSlideOpen] = useState(false);
  const slideOneRef = useRef(null);
  const slideCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedRidePanelRef =  useRef(null);
  const vehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const submitHandler = (e)=> {
    e.preventDefault();
  }

  useGSAP(() => {
    if(slideOpen){
      gsap.to(slideOneRef.current, {
        height: '70%',
        opacity: 1,
        duration: 0.5,
      })
      gsap.to(slideCloseRef.current, {
        opacity: 1,
        duration: 0.5,
      })
    } else {
      gsap.to(slideOneRef.current, {
        height: '0%',
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
      gsap.to(slideCloseRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      })
    }
  }, [slideOpen]);

  useGSAP(()=> {
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0%)',
        hidden: false,
        duration: 0.6,
        ease: "power2.inOut",
      })
    }
    else{
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
        hidden: true,
        duration: 0.5,
        ease: "power2.inOut",
      })
    }
  }, [vehiclePanel])


  useGSAP(()=> {
    if(confirmRidePanel){
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(0%)',
        duration: 0.6,
        ease: "power2.inOut",
      })
    }
    else{
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: "power2.inOut",
      })
    }
  }, [confirmRidePanel])

  useGSAP(()=> {
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0%)',
        duration: 0.6,
        ease: "power2.inOut",
      })
    }
    else{
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: "power2.inOut",
      })
    }
  }, [vehicleFound])

  useGSAP(()=> {
    if(waitingForDriver){
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(0%)',
        duration: 0.6,
        ease: "power2.inOut",
      })
    }
    else{
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: "power2.inOut",
      })
    }
  }, [waitingForDriver])

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-22 absolute left-5 top-5" src={uberLogo} alt="" />

      <div className="h-screen w-screen">
        <img className="h-full w-full object-cover" src={homeMap} alt="map" />
      </div>

      <div className=" h-screen absolute flex flex-col justify-end bottom-0 w-full">
        <div className="h-[30%] bg-white px-5 py-4 relative">
        <h5 ref={slideCloseRef} onClick={()=> {
          setSlideOpen(false);
        }} className="absolute opacity-0 top-1 right-2 text-xl"><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className="text-2xl font-semibold mt-2.5">Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line absolute h-15 w-1 top-[42%] left-8 bg-gray-700 rounded-full"></div>
            <input
              type="text"
              placeholder="Add a pick-up location"
              onClick={(e) => {
                setSlideOpen(true);
                e.target.blur();
                e.target.focus();
              }}
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              className="bg-[#eee] mt-5 px-8 py-2 text-md rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Enter your destination"
              onClick={(e) => {
                setSlideOpen(true);
                e.target.blur();
                e.target.focus();
              }}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] mt-4 px-8 py-2 text-md rounded-lg w-full"
            />
          </form>
        </div>
        <div ref={slideOneRef} className="opacity-0 h-[0%] bg-white px-5">
          <LocationSearchPanel setSlideOpen={setSlideOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed w-full bottom-0 z-10 px-2 py-1 bg-white translate-y-full">
              <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={confirmedRidePanelRef} className="fixed w-full bottom-0 z-10 px-2 py-6 bg-white translate-y-full">
              <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className="fixed w-full bottom-0 z-10 px-2 py-6 bg-white translate-y-full">
              <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={WaitingForDriverRef} className="fixed w-full bottom-0 z-11 px-2 py-6 bg-white  translate-y-full">
              <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>
    </div>
  );
};

export default Home;
