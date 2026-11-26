import { useEffect, useState } from "react";

export default function HomePage() {
  type song = {
    id: number;
    title: string;
    artist: string;
    album: string;
    genre: string;
    release_date: string;
    image_url: string;
    rating: number;
  };

  const [songs, setSongs] = useState<song[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/songs");
      const result = (await response.json()) as song[];
      setSongs(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1> Musical Playlist Solo</h1>
      {songs.map((song) => (
        <p>
          {song.title} - {song.artist}
        </p>
      ))}
    </div>
  );
}
