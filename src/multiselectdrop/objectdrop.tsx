import React, { ChangeEvent, useState } from "react";
import _ from "lodash";
import "./objectdrop.css";
import { Data } from "./objectdropoutput";


interface DropType{
    values: Data[]
}

function ObjectDrop(props:DropType) {
  let { values } = props;

  const [selected, setSelected] = useState<string[]>([]);
  const [available, setAvailable] = useState<Data[]>(values);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleChange = (event:ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (!selected.includes(selectedValue)) {
      setSelected([...selected, selectedValue]);
    }
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedItems((arg) => {
      if (!arg.includes(id)) {
        return [...arg, id];
      } else {
        return arg.filter((item) => item !== id);
      }
    });
  };

  const handleRemoveClick = (item:number) => {
    setSelected(selected.filter((option) => _.toNumber(option) !== item));

    setAvailable(available.filter((option) => option.id !== item));
  };
  const handleCheckboxRemoveClick = () => {
    setAvailable((arg) =>
      arg.filter((option) => !selectedItems.includes(option.id))
    );
    setSelected((arg) =>
      arg.filter((option) => !selectedItems.includes(_.toNumber(option)))
    );
  };
  return (
    <div>
      <div>
        <table>
          {available.map((item) => (
            <tr>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(item.id)}
                  checked={selectedItems.includes(item.id)}
                />
              </td>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.country}</td>
              <td>
                <button onClick={() => handleRemoveClick(item.id)}>x</button>
              </td>
            </tr>
          ))}
        </table>
        <div>
          <button className="alldelete" onClick={handleCheckboxRemoveClick}>
            Delete
          </button>
        </div>
      </div>
      <input value={selected} />
      <select onChange={handleChange}>
        {available.map((item, index) => (
          <option key={index}>{item.id}</option>
        ))}
      </select>
    </div>
  );
}

export default ObjectDrop;
