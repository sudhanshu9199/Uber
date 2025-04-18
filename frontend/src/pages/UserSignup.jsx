import React, { useState } from "react";
import { Link } from "react-router-dom";
import uberLogo from "../assets/Uber-black-Logo.png";
import UserSignupBg from "../assets/User-signup-bg.png";


const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstname,
        lastName: lastname
      },
      email: email,
      password: password,
    });

    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstname("")
    setLastname("");
  };
  return (
    <div
      className="h-screen bg-cover bg-center p-6 flex flex-col justify-between"
      style={{ backgroundImage: `url(${UserSignupBg})` }}
    >
      <div className="relative z-10">
        <img className="w-18 mb-8" src={uberLogo} alt="uber logo" loading="lazy"/>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg mb-2 font-medium">What's your Full Name</h3>
          <div className="flex items-center gap-5">
            <input
              type="text"
              required
              autoComplete="email"
              placeholder="First name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border-b-blue-500 text-lg placeholder:text-sm mb-3"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
            />
            <input
              type="text"
              autoComplete="email"
              placeholder="Last name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border-b-blue-500 text-lg placeholder:text-sm mb-3"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
            />
          </div>

          <h3 className="inline-block text-lg mb-2 font-bold bg-gradient-to-r from-black via-[#91804D] to-[#FFDA0A] bg-clip-text text-transparent">What's your Email</h3>
          <input
            type="email"
            required
            autoComplete="email"
            placeholder="email@example.com"
            className="bg-[#eeeeee] rounded px-4 py-2 w-full border-b-blue-500 text-lg placeholder:text-sm mb-3"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            type="password"
            required
            autoComplete="current-password"
            placeholder="password"
            className="bg-[#eeeeee] rounded px-4 py-2 w-full border-b-blue-500 text-lg placeholder:text-sm"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className=" bg-black hover:bg-gray-800 transition-all duration-200 text-white font-semibold mt-7 rounded px-4 py-2 border-none w-full flex items-center justify-center text-2xl ">
            register
          </button>
          <p className="text-amber-300">
            Already have an account?{" "}
            <Link to="/login" className="inline-block bg-gradient-to-r from-white via-[#7A7879] to-white bg-clip-text text-transparent">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div className="relative z-10 mt-5">
        <p className="text-emerald-100 text-xs leading-tight">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  );
};

export default UserSignup;
