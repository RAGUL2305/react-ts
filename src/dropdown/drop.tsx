import React, { useState } from "react";
import './drop.css';

const values = ["Python", "Css", "Java", "Js"];

 function DropDown() {
  const [drop, setDrop] = useState<string>("");
  const handleClick = (e:any):void => {
    setDrop(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={drop}
      />
      <select onClick={handleClick}>
        {values.map((item, i) => (
          <option>{item}</option>
        ))}
        ;
      </select>
    </div>
  );
}

export default DropDown;
