import React from "react";
import "./style.css";
import CSS from "csstype";
import Card from "../card";

interface props {
  style?: CSS.Properties;
  children?: JSX.Element | JSX.Element[];
  artistName?: string;
  imgUrl?: string;
}

function TopArtist(props: props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gridArea: "top-artist",
      }}
    >
      <h2 className="section-heading">Top Artist</h2>
      <Card
        style={{
          padding: "0",
          height: "100%",
          flex: 1,
        }}
      >
        <div
          className="top-artist"
          style={{ backgroundImage: `url(${props.imgUrl})` }}
        >
          {props.children}
          <div className="z-correction">
            {/* <h3 className="top-artist-title">Top Artist</h3> */}
            <h2 className="top-artist-name">{props.artistName}</h2>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TopArtist;
