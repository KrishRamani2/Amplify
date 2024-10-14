import React from 'react';
import { Play, Plus, MoreHorizontal, Clock } from 'lucide-react';
import Image1 from "../images/music.jpg"
interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
}

const songs: Song[] = [
  { id: 1, title: 'Jo Tum Mere Ho', artist: 'Anuv Jain', album: 'Jo Tum Mere Ho', duration: '4:11', coverUrl: '/api/placeholder/40' },
  { id: 2, title: 'Samjho Na', artist: 'Aditya Rikhari', album: 'Samjho Na', duration: '2:52', coverUrl: '/api/placeholder/40' },
  { id: 3, title: 'Husn', artist: 'Anuv Jain', album: 'Husn', duration: '3:37', coverUrl: '/api/placeholder/40' },
  { id: 4, title: 'Ek Dil Ek Jaan (From "Padmaavat")', artist: 'Shivam Pathak, Sanjay Leela Bhansali', album: 'Ek Dil Ek Jaan (From "Padmaavat")', duration: '3:39', coverUrl: '/api/placeholder/40' },
  { id: 5, title: 'Baarishein', artist: 'Anuv Jain', album: 'Baarishein', duration: '3:27', coverUrl: '/api/placeholder/40' },
  { id: 6, title: 'Sang Rahiyo', artist: 'Jasleen Royal', album: 'Sang Rahiyo', duration: '3:33', coverUrl: '/api/placeholder/40' },
];

const SpotifyPlaylist: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-pink-700 to-black min-h-screen text-white p-8">
      <div className="flex items-end space-x-6 mb-6">
        <img src={Image1} alt="Playlist cover" className="w-58 h-58 shadow-lg" />
        <div>
          <p className="uppercase text-sm font-bold">Playlist</p>
          <h1 className="text-8xl font-bold mb-6">Anuv Jain Mix</h1>
          <p className="text-sm text-gray-300">Aditya A, The Local Train and Aditya Rikhari</p>
          <p className="text-sm text-gray-300">
            <img src={Image1} alt="Spotify logo" className="inline-block mr-1" />
            Spotify • 50 songs, about 2 hr 45 min
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <button className="bg-green-500 rounded-full p-4">
          <Play fill="black" size={24} />
        </button>
        <button className="border border-gray-400 rounded-full p-2">
          <Plus size={24} />
        </button>
        <button className="text-gray-400">
          <MoreHorizontal size={24} />
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700 text-gray-400 text-sm">
            <th className="text-left pb-2">#</th>
            <th className="text-left pb-2">Title</th>
            <th className="text-left pb-2">Album</th>
            <th className="text-left pb-2">Date added</th>
            <th className="text-right pb-2"><Clock size={16} /></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id} className="hover:bg-white/10">
              <td className="py-3">{song.id}</td>
              <td className="py-3">
                <div className="flex items-center">
                  <img src={Image1}   className="w-10 h-10 mr-3" />
                  <div>
                    <p className="font-medium">{song.title}</p>
                    <p className="text-sm text-gray-400">{song.artist}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 text-gray-400">{song.album}</td>
              <td className="py-3 text-gray-400">2 days ago</td>
              <td className="py-3 text-right text-gray-400">{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpotifyPlaylist;