import React, { useState } from "react";
import Card from "./card";

function Movielist({ movielist, title }) {
  

  
  return (
    <div className="  text-white">
      <div>
        <h1>{title}</h1>
        <div className=" flex  overflow-x-scroll gap-5    ">
          {movielist &&
            movielist.map((c) => (
              <div className=" ">
                <Card key={c.id} carditem={c} />
              </div>
            ))}
        </div>
      </div>
      
    </div>
  );
}

export default Movielist;
