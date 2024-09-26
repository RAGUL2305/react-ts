import React from "react";
import ObjectDrop from "./objectdrop";


export interface Data {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    country: string;
  }
let data:Data[] = [
      {
        id: 1,
        first_name: "Gavrielle",
        last_name: "Lineham",
        email: "glineham0@barnesandnoble.com",
        gender: "Female",
        country: "Russia",
      },
      {
        id: 2,
        first_name: "Michail",
        last_name: "Napolione",
        email: "mnapolione1@flickr.com",
        gender: "Male",
        country: "France",
      },
      {
        id: 3,
        first_name: "Marthena",
        last_name: "Antognoni",
        email: "mantognoni2@slate.com",
        gender: "Female",
        country: "China",
      },
      {
        id: 4,
        first_name: "Darrelle",
        last_name: "Plinck",
        email: "dplinck3@vinaora.com",
        gender: "Female",
        country: "France",
      },
      {
        id: 5,
        first_name: "Matthias",
        last_name: "Whyffen",
        email: "mwhyffen4@ft.com",
        gender: "Male",
        country: "Japan",
      },
    ];
    
function Output(){
    return(
   <ObjectDrop  values = {data}/>
    )
}
export default Output;