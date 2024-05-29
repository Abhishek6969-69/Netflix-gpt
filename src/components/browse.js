import React from "react";
import Header from "./header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { json, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Usemovies from "../hooks/usemovies";
import Videotitle from "./Videotitle";
import Maincontainer from "./Maincontainer";
const Browse = () => {
  const store = useSelector((state) => state?.user);
  console.log(store, "hiiiii what");
  const navigate = useNavigate();
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  Usemovies();
  console.log(json.results);

  return (
    <div className=" relative ">
      <div className="flex justify-between  ">
        <div className="   bg-black  ">
          <Header />
        </div>
        <div className=" flex z-40 ">
          {store && store.photoURL && (
            <img
              className=" rounded-full w-16 mt-4 mr-10"
              src={store?.photoURL}
            />
          )}
          <button
            className="w-36 p-2   rounded  bg-red-700   z-50 capitalize"
            onClick={handlesignout}
          >
            Sign out
          </button>
        </div>
       
      </div>
      <div className="bg-gradient-to-b from-black absolute ">
        <Maincontainer />
      </div>
     
    </div>
  );
};

export default Browse;
