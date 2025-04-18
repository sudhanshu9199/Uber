import React, { useState } from 'react'
import { Link } from "react-router-dom";
import captainSignupBg from "../assets/captain-signup-bg.png";
import captainUberLogo from "../assets/uber-captain-logo2-1.png";


const CaptainSignup = () => {
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
    style={{ backgroundImage: `url(${captainSignupBg})` }}
  >
    <div className="relative z-10">
      <img className="w-18 mb-8" src={captainUberLogo} alt="captain uber logo" loading="lazy" />
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h3 className="text-lg mb-2 font-medium">What's your Full Name Captain</h3>
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

        <h3 className="text-black text-lg mb-2 font-bold">What's your Email</h3>
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
        <h3 className="inline-block text-lg mb-2 font-medium bg-[linear-gradient(90deg,rgba(252,252,86,1)_5%,rgba(252,252,86,1)_35%,rgba(252,252,86,1)_55%)] text-transparent bg-clip-text">Enter Password</h3>
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
          register<span className='text-sm ml-1 mt-1'>Captain</span>
        </button>
        <p className="inline-block bg-[linear-gradient(90deg,rgba(0,0,1)_5%,rgba(252,252,86,1)_35%,rgba(252,252,86,1)_55%)] text-transparent bg-clip-text">
          Already have an account?
          <Link to="/captain-login" className="text-white">
            Login here
          </Link>
        </p>
      </form>
    </div>
    <div className="relative z-10 mt-5">
      <p className="text-emerald-100 text-xs leading-tight">This site is protexted by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
    </div>
  </div>
  )
}

export default CaptainSignup