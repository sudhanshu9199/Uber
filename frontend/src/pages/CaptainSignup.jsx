/* CaptainSignup.jsx */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import captainSignupBg from "../assets/captain-signup-bg2.png";
import captainUberLogo from "../assets/uber-captain-logo2-1.png";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        vehicleType: vehicleType,
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
      },
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token);
      navigate('/captain-home')
    }

    console.log(captainData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleType("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center p-5 flex flex-col justify-between"
      style={{ backgroundImage: `url(${captainSignupBg})` }}
    >
      <div className="relative z-10">
        <img
          className="w-18 mb-6"
          src={captainUberLogo}
          alt="captain uber logo"
          loading="lazy"
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="space-y-4"
        >
          {" "}
          {/* point */}
          <h3 className="inline-block text-base font-semibold bg-[linear-gradient(90deg,rgba(0,0,0,1)_5%,rgba(255,255,255,1)_13%,rgba(0,0,0,1)_55%,rgba(255,255,255,1)_77%,rgba(0,0,0,1)_83%)] text-transparent bg-clip-text mb-1">
            What's your Full Name Captain
          </h3>
          <div className="flex gap-3">
            <input
              type="text"
              required
              placeholder="First Name"
              className="flex-1 bg-white/90 rounded-md px-3 py-2 text-sm"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 bg-white/90 rounded-md px-3 py-2 text-sm"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <h3 className="inline-bloack text-base font-semibold bg-[linear-gradient(78deg,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_4%,rgba(0,0,0,1)_16%)] text-transparent bg-clip-text mb-1">
            What's your Email
          </h3>
          <input
            type="email"
            required
            autoComplete="email"
            placeholder="email@example.com"
            className="w-full bg-white/90 rounded-md px-3 py-2 text-sm"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="inline-block text-base font-semibold bg-[linear-gradient(76deg,rgba(0,0,0,1)_10%,rgba(255,255,255,1)_49%,rgba(0,0,0,1)_92%)] text-transparent bg-clip-text mb-1">
            Enter Password
          </h3>
          <input
            type="password"
            required
            autoComplete="current-password"
            placeholder="password"
            className="w-full bg-white/90 rounded-md px-3 py-2 text-sm"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <h3 className="inline-block text-base font-semibold bg-[linear-gradient(76deg,rgba(0,0,0,1)_5%,rgba(255,255,255,1)_40%)] text-transparent bg-clip-text mb-1">
            Vehicle Type
          </h3>
          <select
  required
  className="w-full bg-white/90 rounded-md px-3 py-2 text-sm"
  value={vehicleType}
  onChange={(e) => setVehicleType(e.target.value)}
>
  <option value="" disabled>
    -- Select Vehicle Type --
  </option>
  <option value="Sedan">Sedan</option>
  <option value="Hatchback">Hatchback</option>
  <option value="SUV">SUV</option>
  <option value="Mini">Mini</option>
  <option value="Auto Rickshaw">Auto Rickshaw</option>
  <option value="Bike">Bike</option>
  <option value="Electric">Electric</option>
</select>
          <h3 className="inline-block text-base font-semibold bg-[linear-gradient(76deg,rgba(0,0,0,1)_75%,rgba(255,255,255,1)_92%)] text-transparent bg-clip-text mb-1">
            Vehicle Color
          </h3>
          <input
            type="text"
            required
            placeholder="e.g. White, Black"
            className="w-full bg-white/90 rounded-md px-3 py-2 text-sm"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
          />
          <h3 className="text-base font-semibold text-black mb-1">Vehicle Plate</h3>
          <input
            type="text"
            required
            placeholder="e.g. BR01AB1234"
            className="w-full bg-white/90 rounded-md px-3 py-2 text-sm"
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
          />
          <div>
          <h3 className="inline-block text-base font-semibold bg-[linear-gradient(76deg,rgba(0,0,0,1)_62%,rgba(255,255,255,1)_81%,rgba(0,0,0,1)_90%)] text-transparent bg-clip-text mb-1">Vehicle Capacity</h3>
          <input
            type="number"
            required
            placeholder="e.g. 4"
            className="w-full bg-white/90 rounded-md px-3 py-2 text-sm"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
          />
          </div>
          <button className="w-full bg-black text-white text-xl font-bold py-3 rounded-md hover:bg-gray-800 transition-all">
            register<span className="text-sm ml-1">Captain</span>
          </button>
          <p className="text-sm text-white text-center mt-3">
            Already have an account?
            <Link to="/captain-login" className="underline text-yellow-200">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div className="relative z-10 mt-5">
        <p className="text-emerald-100 text-xs leading-tight">
          This site is protexted by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
