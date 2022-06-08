import "./App.css";
import ShareButton from "./components/share-button";
import Card from "./components/card";
import DisplayName from "./components/display-name";
import data from "./data";
import Artwork from "./components/artwork";
import TopArtist from "./components/top-artist";
import TopGenre from "./components/top-genres";
import Chip from "./components/chip";

function App() {
  let genres: string[] = [];
  data.topArtists.items.forEach((item)=>{
    genres.push(...item.genres);
  });

  interface Counts {
    [key: string]: number
  }
  let counts: Counts = {};
  genres.forEach(function (genre) { counts[genre] = (counts[genre] || 0) + 1; });

  let topGenres = [];

  Object.keys(counts).forEach(key => {
    if (counts[key] < 3) delete counts[key];
  });

  return (
    <main>
      <div className="container">
      <h1 style={{gridArea: 'site-title'}}>Topify</h1>
        <Card style={{ gridArea: "name" }}>
          <DisplayName displayName={data.me.display_name} />
          <ShareButton text="" alignment={"bottom-right"} />
        </Card>
        <div style={{display: 'flex', flexDirection: 'column', gridArea: "top-genre"}}>
          <h2 className="section-heading">Top Genres</h2>
          <Card style={{ gridArea: "top-genre" }}>
            {
              Object.keys(counts).map(genre=>{
                return <Chip text={genre}></Chip>
              })
            }
            {/* <TopGenre genres={data.topArtists.items} /> */}
          </Card>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gridArea: "stat"}}>
          <h2 className="section-heading">Top Artist</h2>
          <Card
            style={{
              padding: "0",
              height: '100%',
              flex: 1
            }}
          >
            <TopArtist
              artistName={data.topArtists.items[0].name}
              imgUrl={data.topArtists.items[0].images[0].url}
            />
          </Card>
        </div>
        <div style={{ gridArea: "top-song" }}>
          <h2 className="section-heading">Top Tracks</h2>
          {data.topTracks.items.map((track, index) => {
            if (index < 6) {
              return (
                <Card style={{ padding: "0", margin: "0 0 1em 0" }}>
                  <Artwork
                    key={index}
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
        {/* <Card
          style={{
            padding: "0",
            gridArea: "top-genre",
          }}
        >
          <TopArtist
            artistName={data.topArtists.items[0].name}
            imgUrl={data.topArtists.items[0].images[0].url}
          />
        </Card> */}
      </div>
    </main>
  );
}

export default App;
