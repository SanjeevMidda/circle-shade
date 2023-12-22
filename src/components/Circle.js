import React from "react";

const Circle = ({ circleColor, status, setStatus }) => {
  let styles = {
    backgroundColor: status ? "orangered" : "white",
  };
  return (
    <div
      className="circle"
      style={styles}
      onClick={() => setStatus({ dotOne: status, dotTwo: !status })}
    ></div>
  );
};

export default Circle;
