import React from "react";
import "./style.css";
import CSS from "csstype";

interface props {
  style?: CSS.Properties;
  children?: JSX.Element | JSX.Element[];
  artistName?: string;
  imgUrl?: string;
}

function TopArtist(props: props) {
  return (
    <div className="top-artist" style={{ backgroundImage: `url(${props.imgUrl})` }}>
      {props.children}
    </div>
  );
}

export default TopArtist;
