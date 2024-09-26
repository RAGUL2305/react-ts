import React, { ChangeEvent, useState } from "react";

interface Abc{
    values: string[]
}

export default function MultiSelectDropdown(props:Abc) {
  let { values } = props;
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [availableOptions, setAvailableOptions] = useState(values);

  const handleChange = (event:ChangeEvent<HTMLSelectElement>):void => {
    const selectedValue = event.target.value;
    if (!selectedOptions.includes(selectedValue))
      setSelectedOptions([...selectedOptions, selectedValue]);
  };

  const handleRemoveClick = (item:string) => {
    setSelectedOptions(selectedOptions.filter((option) => option !== item));
    setAvailableOptions(availableOptions.filter((option) => option !== item));
  };

  return (
    <div>
      <input value={selectedOptions} className="inputbox" />
      <select onChange={handleChange}>
        {availableOptions.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div>
        <h3>SelectedItems:</h3>
        <ul>
          {selectedOptions.map((item , i) => (
            <li key={i}>
              {item}
              <button onClick={() => handleRemoveClick(item)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
