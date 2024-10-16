"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const API_KEY = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
interface ArtistData {
  name: string;
  image?: Array<{ "#text": string }>;
  stats: { playcount: string };
  bio: { summary: string };
}
export default function CardDemo() {
  const [artistData, setArtistData] = useState<ArtistData | null>(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Coldplay&api_key=${API_KEY}&format=json`
        );
        const data = await response.json();
        setArtistData(data.artist);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };
    fetchArtistData();
  }, []);

  if (!artistData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[380px] h-[380px] bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0">
          {artistData.image && artistData.image[2]["#text"] && (
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={artistData.image[2]["#text"]}
              alt={artistData.name}
              width={192}
              height={192}
            />
          )}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {artistData.name}
          </div>
          <p className="mt-2 text-slate-500">
            {artistData.stats.playcount} plays
          </p>
          <p className="mt-2 text-slate-500">
            {artistData.bio.summary.split("<a")[0]}
          </p>
        </div>
      </div>
    </div>
  );
}