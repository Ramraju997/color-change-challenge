import React from "react";

function InputBox({ color, setColor }) {
  return (
    <div>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}

export default InputBox;
