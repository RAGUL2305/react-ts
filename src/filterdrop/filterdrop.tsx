import React, { useState, useEffect, ChangeEvent, HTMLInputAutoCompleteAttribute } from "react";

const options:string[] = ["python", "java", "css", "js"];

 function Shortout() {
  const [search, setSearch] = useState<string>("");
  const [choose, setChoose] = useState<string[]>([]);

  useEffect(():void => {
    return setChoose(options.filter((item: string) => item.includes(search)));
  }, [search]);

  const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={search}
        placeholder="Search here"
        className="input"
      />
      {
        <ul>
          {choose.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Shortout;