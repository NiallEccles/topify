import "./App.css";
import ShareButton from "./components/share-button";
import Card from "./components/card";
import DisplayName from "./components/display-name";
import data from "./data";
import Artwork from "./components/artwork";

function App() {
  console.log(data);
  return (
    <main>
      <h1>Topify</h1>
      <div className="container">
        <Card style={{ gridArea: "name" }}>
          <DisplayName displayName={data.me.display_name} />
          <ShareButton text="" alignment={"bottom-right"} />
        </Card>
        <div style={{gridArea: 'top-song'}}>
          <h2 className="section-heading">Top Tracks</h2>
          {data.topTracks.items.map((track, index) => {
            if (index < 6) {
              return (
                <Card style={{ padding: "0", margin: "0 0 1em 0"}}>
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
      </div>
    </main>
  );
}

export default App;
