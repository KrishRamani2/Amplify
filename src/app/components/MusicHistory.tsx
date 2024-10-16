import React, { useState } from "react";
import { Timeline } from "./ui/timeline";
import { Play, Pause } from "lucide-react";

// Define types for SongItem props
type SongItemProps = {
  title: string;
  artist: string;
  year: string;
};

const SongItem: React.FC<SongItemProps> = ({ title, artist, year }) => (
  <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg shadow-md">
    <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{title}</h3>
    <p className="text-xs text-neutral-600 dark:text-neutral-400">{artist}</p>
    <p className="text-xs text-neutral-500 dark:text-neutral-500">{year}</p>
  </div>
);

// Define types for AudioPlayer props
type AudioPlayerProps = {
  src: string;
  title: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({  title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="flex items-center space-x-2 mb-2">
      <button
        onClick={togglePlay}
        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>
      <span className="text-sm text-neutral-700 dark:text-neutral-300">{title}</span>
      {/* <audio src={src} onEnded={() => setIsPlaying(false)} ref={(audio) => {
        if (audio) {
          isPlaying ? audio.play() : audio.pause();
        }
      }} /> */}
    </div>
  );
};

// Define types for DayItem props
type DayItemProps = {
  day: string;
  songSnippets: { src: string; title: string }[];
};

const DayItem: React.FC<DayItemProps> = ({ day, songSnippets }) => (
  <div className="mb-4">
    <h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">{day}</h3>
    {songSnippets.map((snippet, index) => (
      <AudioPlayer key={index} src={snippet.src} title={snippet.title} />
    ))}
  </div>
);

// Define types for TimelineDemo component
type TimelineData = {
  title: string;
  content: JSX.Element;
};

export const TimelineDemo: React.FC = () => {
  const data: TimelineData[] = [
    {
      title: "Week of October 1-7, 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            A week of new releases and studio recordings
          </p>
          <DayItem
            day="Monday, October 1"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Neon Dreams - Verse 1" },
              { src: "/api/placeholder/audio", title: "Neon Dreams - Chorus" },
            ]}
          />
          <DayItem
            day="Tuesday, October 2"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Quantum Harmony - Intro" },
              { src: "/api/placeholder/audio", title: "Quantum Harmony - Bridge" },
            ]}
          />
          <DayItem
            day="Wednesday, October 3"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Live at Stellar Club - Opening" },
              { src: "/api/placeholder/audio", title: "Live at Stellar Club - Fan Favorite" },
            ]}
          />
          <DayItem
            day="Thursday, October 4"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Digital Serenade - Synth Layer" },
              { src: "/api/placeholder/audio", title: "Digital Serenade - Drum Pattern" },
            ]}
          />
          <DayItem
            day="Friday, October 5"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Holographic Melodies - Music Video Soundtrack" },
              { src: "/api/placeholder/audio", title: "Radio Waves Podcast - Exclusive Preview" },
            ]}
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <SongItem title="Neon Dreams" artist="The Midnight Echoes" year="2024" />
            <SongItem title="Quantum Harmony" artist="Stellar Waves" year="2024" />
          </div>
        </div>
      ),
    },
    {
      title: "October 8-21, 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            A week of genre experimentation and collaborations
          </p>
          <DayItem
            day="Monday, October 8"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Cosmic Rhythms - Brainstorming Session" },
              { src: "/api/placeholder/audio", title: "Galactic Beats Collective - Jam Session" },
            ]}
          />
          <DayItem
            day="Tuesday, October 9"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Neon Nostalgia - First Take" },
              { src: "/api/placeholder/audio", title: "Retro Futurists - Synth Programming" },
            ]}
          />
          <DayItem
            day="Wednesday, October 10"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Quantum Lullaby - Collaboration Preview" },
              { src: "/api/placeholder/audio", title: "Acoustic Jam - New Ideas" },
            ]}
          />
          <DayItem
            day="Thursday, October 11"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "EP Preview - Track 1" },
              { src: "/api/placeholder/audio", title: "Weekend Livestream - Rehearsal Clip" },
            ]}
          />
          <DayItem
            day="Friday, October 12"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Electric Dreams - Mastered Preview" },
              { src: "/api/placeholder/audio", title: "Summer Tour - Announcement Jingle" },
            ]}
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <SongItem title="Cosmic Rhythms" artist="Galactic Beats Collective" year="2023" />
            <SongItem title="Neon Nostalgia" artist="Retro Futurists" year="2023" />
          </div>
        </div>
      ),
    },
    {
      title: "Streaming Milestones",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Key streaming achievements with song previews
          </p>
          <DayItem
            day="January 15, 2024"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Eternal Echo - 500M Streams Celebration Mix" },
              { src: "/api/placeholder/audio", title: "Playlist Feature - Top Track" },
            ]}
          />
          <DayItem
            day="April 3, 2024"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Cybernetic Symphony - 450M Stream Special" },
              { src: "/api/placeholder/audio", title: "10M Followers - Thank You Track" },
            ]}
          />
          <DayItem
            day="July 20, 2024"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Quantum Quasar - 400M Streams Remix" },
              { src: "/api/placeholder/audio", title: "Stellar Drift - Top 50 Chart Entry" },
            ]}
          />
          <DayItem
            day="October 1, 2024"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Nebula Nocturne - 380M Streams Version" },
              { src: "/api/placeholder/audio", title: "20M Monthly Listeners - Exclusive Track" },
            ]}
          />
          <DayItem
            day="December 31, 2024"
            songSnippets={[
              { src: "/api/placeholder/audio", title: "Hologram Heart - 350M Streams Acoustic" },
              { src: "/api/placeholder/audio", title: "Year-End Mashup - 500% Growth Celebration" },
            ]}
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <SongItem title="Eternal Echo" artist="Cosmic Harmonies" year="2022" />
            <SongItem title="Cybernetic Symphony" artist="Digital Dreamers" year="2022" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};
