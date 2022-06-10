import "../App.css";
import ShareButton from "../components/share-button";
import Card from "../components/card";
import DisplayName from "../components/display-name";
import TopArtist from "../components/top-artist";
import TopGenre from "../components/top-genres";
import TopTrackss from "../components/top-tracks";
import { TopTracks } from "../utils/toptracks";
import { TopArtists } from "../utils/topartists";
import { useParams } from "react-router-dom";
import { Data } from "../utils/data";

let data: Data;

function Top() {
  let params = useParams();
  if (params.id) {
    console.log(params.id);
  }

  return (
    <main>
      <h1 style={{ gridArea: "site-title" }}>Topify</h1>
      {data ? (
        <div className="container">
          <Card style={{ gridArea: "name" }}>
            <DisplayName displayName={data.me.display_name} />
            <ShareButton text="" alignment={"bottom-right"} />
          </Card>
          <TopGenre data={data.artists as TopArtists} />
          <TopArtist
            artistName={data.artists.items[0].name}
            imgUrl={data.artists.items[0].images[0].url}
          />
          <TopTrackss data={data.tracks as TopTracks} />
        </div>
      ) : (
        ""
      )}
    </main>
  );
}

export default Top;
