import React from 'react';
import CardDemo from './ContentCard';

const DashboardHome = () => {
  return (
    <div className="flex flex-1 flex-col p-4 bg-white dark:bg-neutral-900 rounded-lg shadow">
      <h1 className="text-2xl font-bold text-black mb-4">Recommended For You</h1>
      <CardDemo />
      <h1 className="text-2xl font-bold text-black mb-5 mt-5">Anuv Jain</h1>
      <CardDemo />
      <h1 className="text-2xl font-bold text-black mb-4 mt-5">Fresh new music</h1>
      <CardDemo />
      <h1 className="text-2xl font-bold text-black mb-4 mt-5">Featured Charts</h1>
      <CardDemo />
    </div>
  );
};

export default DashboardHome;
