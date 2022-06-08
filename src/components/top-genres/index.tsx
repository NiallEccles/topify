import React from "react";
import "./style.css";
import CSS from "csstype";
import Card from "../card";
import Chip from "../chip";
import { TopArtists } from "../../utils/topartists";

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
  data: TopArtists;
}

function TopGenre(props: props) {
  // console.log(JSON.stringify(props.genres));

  let genres: string[] = [];
  props.data.items.forEach((item) => {
    genres.push(...item.genres);
  });

  interface Counts {
    [key: string]: number;
  }
  let counts: Counts = {};
  genres.forEach(function (genre) {
    counts[genre] = (counts[genre] || 0) + 1;
  });

  Object.keys(counts).forEach((key) => {
    if (counts[key] < 3) delete counts[key];
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gridArea: "top-genre",
      }}
    >
      <h2 className="section-heading">Top Genres</h2>
      <Card style={{ gridArea: "top-genre" }}>
        {Object.keys(counts).map((genre, index) => {
          return <Chip key={index} text={genre}></Chip>;
        })}
      </Card>
    </div>
  );
}

export default TopGenre;
