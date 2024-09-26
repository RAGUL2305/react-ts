import React, { useState } from "react";
import "./increment.css";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const increment = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = (): void => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button className="increment" onClick={increment}>
        increment
      </button>
      <h2>count : {count}</h2>
      <button className="decrement" onClick={decrement}>
        decrement
      </button>
    </div>
  );
}

export default Counter;
