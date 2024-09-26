import React from "react";
import MultiSelectDropdown from "./multidrop";

let options:string[]= ["python", "java", "css", "js"];

function Output() {
  return <MultiSelectDropdown values={options} />;
}

export default Output;