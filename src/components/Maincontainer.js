import React from "react";
import Videotitle from "./Videotitle";
import Videoplaying from "./Videoplaying";
import { useDispatch, useSelector } from "react-redux";
import useMovies from "../hooks/usemovies";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./header";
import {  useNavigate } from "react-router-dom";
import { setpage } from "../utils/configslice";
function Maincontainer() {
  const store = useSelector((state) => state?.user);
  
  const dispatch=useDispatch();
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
  const handlegptsearch=()=>{
    dispatch(setpage())
  }
  useMovies()
  return (
    <div className="   ">
      <div className="flex justify-between   ">
        <div className="   bg-black  ">
          <Header />
          <div  className="relative ">
            <button className="w-24  p-2  absolute mt-4  mx-[980px]  mr-0  rounded-lg   bg-blue-600   z-50   capitalize" onClick={handlegptsearch}>Gptsearch</button>
          </div>
        </div>
        
        <div className=" flex z-40 mx-[1100px]  ">
          <div className=" mx-3">
          {store && store.photoURL && (
            <img
              className=" rounded-full w-16 mt-4 mr-10"
              src={store?.photoURL}
            />
          )}
          </div>
         
         
          <div>
          <button
            className="w-24  p-2   mt-4    rounded-lg  bg-red-700   z-50 capitalize"
            onClick={handlesignout}
          >
            Sign out
          </button>
          </div>
          
        </div>
        </div>
        
          <div className=" z-30 absolute">
        <Videotitle />
      </div>
      <div className="  mt-[-80px] absolute">
        <Videoplaying />
      </div>
     
      
      
    </div>
  );
}

export default Maincontainer;
