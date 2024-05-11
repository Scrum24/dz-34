import React from "react";
import "./SmileBlock.css";

function SmileBlock(props) {
  return (
    <div className="smile-block">
      <img src={props.ent.src} onClick={props.onClick}></img>

      <p>Count: {props.ent.count}</p>
    </div>
  );
}

export default SmileBlock;
