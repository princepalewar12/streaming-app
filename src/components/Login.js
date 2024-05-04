import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_LOGO } from "../utils/constants";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null)

  const handleButtonClick = () => {
    // Validate the form Data


    const message = checkValidData( name.current.value, email.current.value, password.current.value);
    setErrorMessage(message);


  };

  const toggleSignInFrom = () => {
    setIsSignInFrom(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_LOGO} alt="netflix-logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white rounded-lg bg-opacity-80"
        action=""
      >
        <h1 className="font-bold text-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="email address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInFrom}>
          {isSignInForm
            ? "New to Netflix Sign Up Now"
            : "Already Registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
