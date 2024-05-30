import React from "react";



import { useSelector } from "react-redux";

import Videotitle from "./Videotitle";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./secondary container";
import Gptssearch from "./Gptssearch";

const Browse = () => {
  const page=useSelector((state)=>state?.config?.showpage)
  
  
  
  

  return (
    <div >
      <div className=" flex-col  ">
       {page?<Gptssearch/>:<><div className="bg-gradient-to-b from-black  ">
          <Maincontainer />
        </div>
        <div className="h-screen  w-screen  mt-[580px]">
        <SecondaryContainer />
        </div>
        </> 
        }
       
      </div>
      
       
     
    </div>
  );
};

export default Browse;
