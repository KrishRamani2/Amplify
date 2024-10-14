import React, { useState } from 'react';
import { FaCog, FaBell, FaMoon, FaUser, FaEnvelope, FaLanguage, FaVolumeUp } from 'react-icons/fa';

const SettingsPage: React.FC = () => {
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('john@example.com');
  const [language, setLanguage] = useState('en');
  const [volume, setVolume] = useState(50);

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center">
        <FaCog className="mr-2" /> Settings
      </h1>
      
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">General</h2>
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center">
              <FaBell className="mr-2" />
              Enable Notifications
            </label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <FaMoon className="mr-2" />
              Dark Mode
            </label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Account</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <FaUser className="mr-2" />
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <FaEnvelope className="mr-2" />
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Preferences</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <FaLanguage className="mr-2" />
              Language
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 flex items-center">
              <FaVolumeUp className="mr-2" />
              Volume
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
        
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="button"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;