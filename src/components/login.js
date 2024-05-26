import React, { useRef } from "react";
import Header from "./header";
import { useState } from "react";
import Validateform from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const [islogin, setislogin] = useState(true);
  const [showmessage, setshowmessage] = useState("");
  const navigate=useNavigate();
  const handleclick = () => {
    const message = Validateform(email.current.value, password.current.value);

    setshowmessage(message);
    if (!islogin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setshowmessage(errorMessage);
          // ..
        });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value,
        password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+ errorMessage)
    setshowmessage( errorMessage)
  });

    }
  };
  const email = useRef(null);
  const password = useRef(null);
  const handleset = () => {
    setislogin(!islogin);
  };
  return (
    <div className=" ">
      <Header />
      <div className=" absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-0 right-0  w-[400px] mx-auto my-auto text-black mt-40 ml-6/12 p-12 bg-black opacity-80 "
      >
        <h1 className="my-3  mx-4  font-bold text-4xl text-white">
          {islogin ? "Sign In" : "Sign Up"}
        </h1>
        {islogin ? (
          ""
        ) : (
          <input
            className="my-2 p-3 w-80   mx-2 rounded bg-gray-200   "
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="my-2 p-3 w-80   mx-2 rounded bg-gray-200   "
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className="my-2 p-3 w-80   mx-2 rounded  "
          type="password"
          placeholder="Password"
        />
        <p className=" text-red-600 p-2 mx-2 capitalize ">{showmessage}</p>
        <button
          className="   w-80 mt-5   mx-2 p-3 rounded bg-red-700  "
          onClick={handleclick}
        >
          {islogin ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="mx-4 mt-4 cursor-pointer z-40 text-white"
          onClick={handleset}
        >
          {islogin
            ? "New to Netflix?Sign up Now"
            : " Already Registered User? sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
