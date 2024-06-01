import React, { useRef } from "react";
import Header from "./header";
import { useState } from "react";
import Validateform from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import {  updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userslice";

const Login = () => {
  const dispatch=useDispatch();
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
          console.log(auth.currentUser,"hello")
          const user = userCredential.user;
          console.log(user,"hi");
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/132159855?s=400&u=0901b4fc467f3238f1487f5f0ac73dc1ae401665&v=4"
          }).then(() => {
            // Profile updated!
            // ...
            const { uid, email, displayName,photoURL } = auth.currentUser;
            dispatch(adduser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));

          }).catch((error) => {
            // An error occurred
            // ...
          });
        
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
  const name=useRef(null);
  const handleset = () => {
    setislogin(!islogin);
  };
  return (
    <div className=" ">
      <Header />
      <div className=" absolute">
        <img className=" h-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-0 right-8 w-[260px] mx-auto  md:w-[400px] md:mx-auto my-auto text-black mt-40 md:ml-6/12 p-12 bg-black opacity-80 "
      >
        <h1 className="my-3  mx-4  font-bold text-4xl text-white">
          {islogin ? "Sign In" : "Sign Up"}
        </h1>
        {islogin ? (
          ""
        ) : (
          <input ref={name}
            className=" mx-0 my-2 w-52 p-2  md:my-2 md:p-3    md:w-80  md:mx-2 rounded bg-gray-200   "
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="  mx-0 my-2 w-52 p-2 md:my-2 md:p-3 md:w-80   md:mx-2 rounded bg-gray-200   "
          type="text"
          placeholder="Email"
        />
        <input
          ref={password}
          className=" mx-0 my-2 w-52 p-2 md:my-2 md:p-3 md:w-80   md:mx-2 rounded  "
          type="password"
          placeholder="Password"
        />
        <p className=" text-red-600 p-2 mx-2 capitalize ">{showmessage}</p>
        <button
          className="  mx-0 my-2 w-52 p-2  md:w-80 md:mt-5   md:mx-2 md:p-3 rounded bg-red-700  "
          onClick={handleclick}
        >
          {islogin ? "Sign In" : "Sign Up"}
        </button>
        <p
          className=" text-[8px] md:text-lg mx-4 mt-4 cursor-pointer z-40 text-white"
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
