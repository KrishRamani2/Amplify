"use client";

import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import Image from "next/image";

const API_KEY = process.env.NEXT_PUBLIC_LASTFM_API_KEY;

export function CardDemo() {
  const [artistData, setArtistData] = useState(null);

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
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-cover bg-center"
        )}
        style={{
          backgroundImage: `url(${artistData.image[3]["#text"]})`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Artist"
            src={artistData.image[2]["#text"]}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {artistData.name}
            </p>
            <p className="text-sm text-gray-400">
              {artistData.stats.playcount} plays
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {artistData.name}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {artistData.bio.summary.split("<a")[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDemo;