import React from "react";
import "./style.css";
import CSS from "csstype";

declare module namespace {
  export interface ExternalUrls {
    spotify: string;
  }

  export interface Followers {
    href?: any;
    total: number;
  }

  export interface Image {
    height: number;
    url: string;
    width: number;
  }

  export interface RootObject {
    external_urls: ExternalUrls;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
  }
}

interface props {
  style?: CSS.Properties;
  children?: JSX.Element | JSX.Element[];
  genres: {}[];
}

function TopGenre(props: props) {
  // console.log(JSON.stringify(props.genres));

  return (
    <div className="top-artist">
      {props.children}
      <div className="z-correction">
        <h3 className="top-artist-title">Top Artist</h3>
      </div>
    </div>
  );
}

export default TopGenre;
