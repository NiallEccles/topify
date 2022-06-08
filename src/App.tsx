import "./App.css";
import ShareButton from "./components/share-button";
import Card from "./components/card";
import DisplayName from "./components/display-name";
import data from "./data";
import Artwork from "./components/artwork";
import TopArtist from "./components/top-artist";
import TopGenre from "./components/top-genres";
import Chip from "./components/chip";
import TopTrackss from "./components/top-tracks";
import { TopTracks } from "./utils/toptracks";

function App() {
  let genres: string[] = [];
  data.topArtists.items.forEach((item) => {
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
  console.log(data.topTracks)

  return (
    <main>
      <h1 style={{ gridArea: "site-title" }}>Topify</h1>
      <div className="container">
        <Card style={{ gridArea: "name" }}>
          <DisplayName displayName={data.me.display_name} />
          <ShareButton text="" alignment={"bottom-right"} />
        </Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gridArea: "top-genre",
          }}
        >
          <h2 className="section-heading">Top Genres</h2>
          <Card style={{ gridArea: "top-genre" }}>
            {Object.keys(counts).map((genre) => {
              return <Chip text={genre}></Chip>;
            })}
          </Card>
        </div>
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
            <TopArtist
              artistName={data.topArtists.items[0].name}
              imgUrl={data.topArtists.items[0].images[0].url}
            />
          </Card>
        </div>
        <div style={{ gridArea: "top-song" }}>
          <TopTrackss data={(data.topTracks as TopTracks)}/>
        </div>
      </div>
    </main>
  );
}

export default App;
