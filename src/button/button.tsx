import React from "react";
import "./button.css";

interface Abc {
  type: "medium" | "big" | "small";
  disabled: boolean;
}
function MyButton(props: Abc) {
  const { type = "medium", disabled = false } = props;
  const isDisabled = disabled ? "disabled" : "";

  return (
    <div>
      <button className={`${type} ${isDisabled}`}> Click </button>
    </div>
  );
}
export default MyButton;
