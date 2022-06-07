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
      <div className="z-correction">
        <h3 className="top-artist-title">Top Artist</h3>
        <h2 className="top-artist-name">{props.artistName}</h2>
      </div>
    </div>
  );
}

export default TopArtist;
