import React, { useState} from "react";
import { Link } from "react-router-dom";
import captainUberLogo from "../assets/uber-captain-logo2-1.png";

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});


  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email:email,
      password:password
    })

    console.log(userData);
    setEmail('');
    setPassword('');
  };
  return (
    <div className="h-screen p-6 flex flex-col justify-between">
    <div>
      <img className="w-20 mb-3 mix-blend-color-burn" src={captainUberLogo} alt="captain uber logo" loading="lazy"/>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <h3 className="text-lg mb-2 font-medium">What's your email</h3>
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email@example.com"
          className="bg-[#eeeeee] rounded px-4 py-2 w-full border-b-blue-500 text-lg placeholder:text-base mb-3"
        />
        <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
        <input
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          className="bg-[#eeeeee] rounded px-4 py-2 w-full border-b-blue-500 text-lg placeholder:text-base"
        />
        <button className=" bg-black hover:bg-gray-800 transition-all duration-200 text-white font-semibold mt-7 rounded px-4 py-2 border-none w-full flex items-center justify-center text-2xl ">
          Login
        </button>
        <p>Join a fleet? <Link to='/captain-signup' className="text-blue-900">Register as a Captain</Link></p> {/*Become a Captain. Join a fleet today! */}
      </form>
    </div>
    <div>
      <Link
      to='/login'
      className=" bg-[#086616] hover:bg-yellow-500 transition-all duration-200 text-[#C3D226] font-semibold mt-7 rounded px-4 py-2 border-none w-full flex items-center justify-center ">Sign in as User</Link>
    </div>
  </div>
  )
}

export default CaptainLogin