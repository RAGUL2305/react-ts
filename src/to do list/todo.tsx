import React, {
  ChangeEvent,
  useState,
  useRef,
  RefObject,
  useEffect,
} from "react";
import "./todo.css";

function ToDO() {
  const [newTask, setNewTask] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [editing, setEditing] = useState<number | null>(null);
  const [currentValue, setCurrentValue] = useState<string>("");
  const inputRef: RefObject<HTMLInputElement> = useRef(null);


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      setNewTask([...newTask, value]);
      setValue("");
    }
  };

  const handleCheckboxChange = (item: string) => {
    setSelectedItems((arg) => {
      if (!arg.includes(item)) {
        return [...arg, item];
      } else {
        return arg.filter((option) => option !== item);
      }
    });
  };

  const handleRemoveClick = (item: string) => {
    setNewTask((arg) => arg.filter((option) => option !== item));
    setSelectedItems((arg) => arg.filter((option) => option !== item));
  };

  const handleRemoveCheckedCick = () => {
    setNewTask((arg) =>
      arg.filter((option) => !selectedItems.includes(option))
    );
    setSelectedItems([]);
  };

  const handleEditClick = (index: number) => {
    setEditing(index);
    setCurrentValue(newTask[index]);
  };
  useEffect(() => {
    if (editing !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const handleSaveClick = (
    index: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const updatedNewTask = [...newTask];
    updatedNewTask[index] = currentValue;
    setNewTask(updatedNewTask);
    setEditing(null);
  };

  return (
    <div>
      <div className="initialbackground">
        <h1>TODOLIST</h1>
        <form onSubmit={handleClick}>
          <input
            type="text"
            value={value}
            className="input"
            placeholder="What needs to be done?"
            onChange={handleInputChange}
          />
          <button type="submit" className="addbutton">
            +
          </button>
        </form>
        <ul>
          {newTask.map((item, index) => (
            <ul key={index} className="checked">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(item)}
                checked={selectedItems.includes(item)}
              />
              {editing === index ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={currentValue}
                  onChange={(e) => setCurrentValue(e.target.value)}
                />
              ) : (
                <span> {item}</span>
              )}
              {editing === index ? (
                <button onClick={(e) => handleSaveClick(index, e)}>Save</button>
              ) : (
                <button
                  className="editbutton"
                  onClick={() => handleEditClick(index)}
                >
                  ✎
                </button>
              )}
              <button
                className="clearbutton"
                onClick={() => handleRemoveClick(item)}
              >
                X
              </button>
            </ul>
          ))}
        </ul>
        <span className="tbl">
          {selectedItems.length} of {newTask.length} tasks done
          <button className="removebutton" onClick={handleRemoveCheckedCick}>
            Remove checked x
          </button>
        </span>
      </div>
    </div>
  );
}

export default ToDO;
