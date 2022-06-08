import React from "react";
import "./style.css";
import CSS from "csstype";
import Card from "../card";
import Artwork from "../artwork";
import { TopTracks } from "../../utils/toptracks";

interface props {
  style?: CSS.Properties;
  children?: JSX.Element | JSX.Element[];
  data: TopTracks;
}

function TopTrackss(props: props) {
  return (
    <div style={{ gridArea: "top-song" }}>
      <h2 className="section-heading">Top Tracks</h2>
      <div className="tracks">
        {props.data.items.map((track, index) => {
          if (index < 6) {
            return (
              <Card style={{ padding: "0", margin: "0 0 1em 0" }} key={index}>
                <Artwork
                  songName={track.name}
                  artistName={track.album.artists}
                  imgUrl={track.album.images[0].url}
                />
              </Card>
            );
          } else {
            return <></>;
          }
        })}
      </div>
    </div>
  );
}

export default TopTrackss;
