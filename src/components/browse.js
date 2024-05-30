import React from "react";



import { useSelector } from "react-redux";

import Videotitle from "./Videotitle";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./secondary container";
const Browse = () => {
 
  
  
  
  

  return (
    <div >
      <div className=" flex-col  ">
       
        <div className="bg-gradient-to-b from-black  ">
          <Maincontainer />
        </div>
        <div className="h-screen  w-screen  mt-[580px]">
        <SecondaryContainer />
        </div>
      </div>
      
       
     
    </div>
  );
};

export default Browse;
