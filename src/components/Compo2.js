import React, { memo } from "react";

function Compo2(props) {
  console.log("component2");

  return (
    <div className="c2">
      <p>Component 2</p>
      value1:
      {props.value1}<br/>
      <input type="text" onChange={(event) => props.setVal2(event.target.value)}/>
    </div>
  );
}

export default memo(Compo2);
