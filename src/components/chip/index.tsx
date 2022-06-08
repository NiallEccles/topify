import React from "react";
import "./style.css";
import CSS from "csstype";

interface props {
  style?: CSS.Properties;
  children?: JSX.Element | JSX.Element[];
  text: string;
}

function Chip(props: props) {
  return <div className="chip">{props.text}</div>;
}

export default Chip;
