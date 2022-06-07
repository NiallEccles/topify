import "./App.css";
import ShareButton from "./components/share-button";
import Card from "./components/card";
import DisplayName from "./components/display-name";
import data from "./data";
import Artwork from "./components/artwork";
import TopArtist from "./components/top-artist";

function App() {
  console.log(data);
  return (
    <main>
      <div className="container">
      <h1 style={{gridArea: 'site-title'}}>Topify</h1>
        <Card style={{ gridArea: "name" }}>
          <DisplayName displayName={data.me.display_name} />
          <ShareButton text="" alignment={"bottom-right"} />
        </Card>
        {/* <Card
          style={{
            padding: "0",
            gridArea: "stat",
            backgroundImage: `url(${data.topArtists.items[0].images[0].url})`,
            backgroundSize: "cover",
          }}
        > */}
        <Card
          style={{
            padding: "0",
            gridArea: "stat",
          }}
        >
          <TopArtist
            artistName={data.topArtists.items[0].name}
            imgUrl={data.topArtists.items[0].images[0].url}
          />
        </Card>
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
        <Card
          style={{
            padding: "0",
            gridArea: "top-genre",
          }}
        >
          <TopArtist
            artistName={data.topArtists.items[0].name}
            imgUrl={data.topArtists.items[0].images[0].url}
          />
        </Card>
      </div>
    </main>
  );
}

export default App;
