import React from "react";



import { useSelector } from "react-redux";

import Videotitle from "./Videotitle";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./secondary container";
import Gptssearch from "./Gptssearch";

const Browse = () => {
  const page=useSelector((state)=>state?.config?.showpage)
  
  
  
  

  return (
    <div className="  " >
      <div className=" flex-col  bg-gradient-to-b from-black  ">
       {page?<Gptssearch/>:<><div className="bg-gradient-to-b from-black  ">
          <Maincontainer />
        </div>
        <div className=" mt-[215px] w-[380px]    md:h-screen md:w-screen md:mt-[630px]">
        <SecondaryContainer />
        </div>
        </> 
        }
       
      </div>
      
       
     
    </div>
  );
};

export default Browse;
