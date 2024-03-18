import React from "react";

const ToggleButton = ({ textColor, setTextColor }) => {
  const handleTextColorChange = () => {
    textColor === "black" ? setTextColor("white") : setTextColor("black");
  };

  return (
    <div>
      <button onClick={handleTextColorChange}>ToogleButton</button>
    </div>
  );
};

export default ToggleButton;
