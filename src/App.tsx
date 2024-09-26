import React from "react";
import logo from "./logo.svg";


import Accordion from "./accordian/accordian";
import MyButton from "./button/button";
import Counter from "./increment/increment";
import DropDown from "./dropdown/drop";
import ToDO from "./to do list/todo";
import Game from "./tictactoe/tictactoe";
import ContactForm from "./contactform/form";
import Output from "./detailsform/detailsoutput";
// import Output from "./multiselectdrop/multioutput";
// import Output from "./multiselectdrop/objectdropoutput";



function App() {
  return (
    <div>
      <center>
      {/* <Accordion /> */}
      {/* <MyButton type="big" disabled={true} /> */}
      {/* <Counter /> */}
      {/* <DropDown /> */}
      {/* <Output /> */}
      {/* <ToDO /> */}
      {/* <Game /> */}
      {/* <ContactForm/> */}
      <Output />
      </center>
    </div>
  );
}

export default App;
