import React from 'react';
import {CardDemo} from './ContentCard';

const Book_ticket_Content = () => {
  return (
    <div className="flex flex-1 flex-col p-4 bg-white dark:bg-neutral-900 rounded-lg shadow">
      <h1 className="text-2xl font-bold text-black mb-4">Upcoming Concerts</h1>
      <div className="flex flex-wrap justify-between mb-5">
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        
      </div>

      <h1 className="text-2xl font-bold text-black mb-4 mt-5">Live Concerts</h1>
      <div className="flex flex-wrap justify-between mb-5">
      <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        
      </div>

      <h1 className="text-2xl font-bold text-black mb-4 mt-5">World Tour</h1>
      <div className="flex flex-wrap justify-between mb-5">
      <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        
      </div>

      <h1 className="text-2xl font-bold text-black mb-4 mt-5">Top Events</h1>
      <div className="flex flex-wrap justify-between mb-5">
      <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        
      </div>
    </div>
  );
};

export default Book_ticket_Content;
