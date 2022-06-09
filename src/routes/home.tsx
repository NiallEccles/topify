import "../App.css";

function generateUrl() {
  let redirectURI = "http://localhost:3000/callback";
  const clientId = "591d4e02e88a4e20a1daf9d59f2a46db";
  const permissions = [
    "user-read-private",
    "user-read-email",
    "user-top-read",
    "playlist-modify-public",
    "user-read-recently-played",
    "ugc-image-upload",
  ];
  const scope = permissions.toString().replace(",", "%20");
  redirectURI = encodeURI(redirectURI);
  document.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scope}&response_type=token&state=123`;
}

function Home() {
  return (
    <main>
      <h1 style={{ gridArea: "site-title" }}>Topify</h1>
      <button onClick={generateUrl}>connect</button>
    </main>
  );
}

export default Home;
