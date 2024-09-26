import React from "react";
import Details from "./details";


let data:string[] = [
      "Boxing",
      "Cricket",
      "Tennis",
      "Baseball",
      "Golf",
      "Badminton",
      "Basketball",
    ];

function Output(){
    return(
     <Details data={data} />
    )
}

export default Output;