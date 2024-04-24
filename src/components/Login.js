import React, { useState } from "react";
import Header from "./Header";
import { NETFLIX_LOGO } from "../utils/constants";

const Login = () => {
  
  const [isSignInForm, setIsSignInFrom] = useState(true)
  
  const toggleSignInFrom = ( ) => { 
    setIsSignInFrom(!isSignInForm)
   }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_LOGO} alt="netflix-logo" />
      </div>
      <form
        className="w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white rounded-lg bg-opacity-80"
        action=""
      >
        <h1 className="font-bold text-xl">{isSignInForm ? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Enter Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />}
        <input
          type="email"
          placeholder="email address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
        {isSignInForm ? "Sign In":"Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInFrom}>{isSignInForm ? "New to Netflix Sign Up Now":"Already Registered Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
