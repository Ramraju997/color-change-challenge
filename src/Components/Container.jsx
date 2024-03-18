import React from "react";
import "./Container.component.css";

const Container = ({ color, textColor }) => {
  return (
    <div className="container-element" style={{ background: `${color}` }}>
      <span className="container-text" style={{color:`${textColor}`}}>
        { color }
      </span>
    </div>
  );
};

Container.defaultProps = {
  color: "green",
};

export default Container;
