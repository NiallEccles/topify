import "./style.css";

interface props {
  artistName?: { external_urls: { spotify: string; }; href: string; id: string; name: string; type: string; uri: string; }[] | { external_urls: { spotify: string; }; href: string; id: string; name: string; type: string; uri: string; }[];
  albumName?: string;
  songName?: string;
  imgUrl?: string;
}

function formatArtistName(artist: props['artistName']) {
    if(artist) {
        const artistNames: string[] = [];
        artist.forEach(artist => artistNames.push(artist.name));
        return artistNames.join();
    }
}

function Artwork(props: props) {
  return (
    <div className="artwork">
      <img src={props.imgUrl} alt="" />
      <div className="song-details">
          <h2 className="song-name">{props.songName}</h2>
          <h3 className="artist-name">{formatArtistName(props.artistName)}</h3>
      </div>
    </div>
  );
}

export default Artwork;
