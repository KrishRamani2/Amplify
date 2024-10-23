/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { FileUploadDemo } from './File-Upload';

const Account_content = () => {
  const [profileImage, setProfileImage] = useState("/api/placeholder/150/150");
  const [user, setUser] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    plan: "Pro"
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: { target: { files: any[]; }; }) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        // Simulate a new image URL (for demonstration)
        setProfileImage(URL.createObjectURL(file));
      }, 1000);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Changes saved successfully!");
    }, 1000);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-6">
       <FileUploadDemo />
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {[
          { label: "Full Name", value: user.name, key: "name" },
          { label: "Username", value: user.username, key: "username" },
          { label: "Email", value: user.email, key: "email" },
        ].map(({ label, value, key }) => (
          <div key={key}>
            <label className="block mb-1 font-semibold text-gray-700">{label}</label>
            <input
              type="text"
              value={value}
              onChange={(e) => setUser({ ...user, [key]: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            />
          </div>
        ))}

        <div>
          <label className="block mb-1 font-semibold text-gray-700">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
        </div>

        {/* Subscription Info */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-sm">
          <h2 className="font-bold mb-2">Current Subscription</h2>
          <p><strong>Plan:</strong> {user.plan}</p>
          <p><strong>Status:</strong> Active</p>
          <p><strong>Next billing:</strong> November 24, 2024</p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-3 rounded-lg text-white transition duration-200 ${
            isLoading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default Account_content;
