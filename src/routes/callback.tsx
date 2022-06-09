import { useEffect } from "react";
import "../App.css";
import { supabase } from "../client";

checkToken();

function checkToken() {
  const url = new URL(window.location.href);
  if (url.hash) {
    let token = url.hash.split("&")[0];
    token = token.replace("#access_token=", "");
    localStorage.setItem("topify_token", token);
    const fetchData = async () => {
      const data = await getData(token);
      localStorage.setItem("topify_data", JSON.stringify(data));
      await saveToSupabase(data);
      window.location.href = location.protocol + '//' + location.host;
    };
    fetchData();
  }
}

async function getData(token: string) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  const dataSets = [
    {
      name: "me",
      url: "https://api.spotify.com/v1/me/",
    },
    {
      name: "recentlyPlayed",
      url: "https://api.spotify.com/v1/me/player/recently-played?limit=50",
    },
    {
      name: "artists",
      url: "https://api.spotify.com/v1/me/top/artists?time_range=long_term",
    },
    {
      name: "tracks",
      url: "https://api.spotify.com/v1/me/top/tracks?time_range=long_term",
    },
  ];

  var promises = dataSets.map((set) =>
    fetch(set.url, { headers }).then((y) => y.json())
  );

  return Promise.all(promises).then((results) => {
    return {
      me: results[0],
      recentlyPlayed: results[1],
      artists: results[2],
      tracks: results[3],
    };
  });
}

async function saveToSupabase(data: { me: { id: number } }) {
  await supabase.from("spotify_data").insert([
    {
      id: data.me.id,
      data,
    },
  ]);
}

function Callback() {
  return (
    <main>{/* <h1 style={{ gridArea: "site-title" }}>Topify</h1> */}</main>
  );
}

export default Callback;
