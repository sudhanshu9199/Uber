import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import uberLogo from "../assets/Uber-black-Logo.png";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";


const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

    const navigate = useNavigate();
  
    const{ user, setUser } = React.useContext(UserDataContext)


  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email:email,
      password:password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token);
      navigate('/home')
    }

    console.log(userData);
    setEmail('');
    setPassword('');
  };
  return (
    <div className="h-screen p-6 flex flex-col justify-between">
      <div>
        <img className="w-18 mb-8" src={uberLogo} alt="uber logo" loading="lazy"/>
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
          <p>New here? <Link to='/signup' className="text-blue-900">Create new Account</Link></p>
        </form>
      </div>
      <div>
        <Link
        to='/captain-login'
        className=" bg-[#FFB616] hover:bg-yellow-500 transition-all duration-200 text-white font-semibold mt-7 rounded px-4 py-2 border-none w-full flex items-center justify-center ">Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
