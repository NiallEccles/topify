import React from "react";
import "./style.css";
import CSS from "csstype";

interface props {
  style?: CSS.Properties;
  children?: JSX.Element | JSX.Element[];
}

function Card(props: props) {
  return (
    <div className="card" style={props.style}>
      {props.children}
    </div>
  );
}

export default Card;
