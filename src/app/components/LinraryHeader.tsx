import React from 'react';
import { Plus, Search } from 'lucide-react';
import { ExpandableCardDemo } from './librarycard';

const LibraryHeader = () => {
  return (
    
     <div className="min-h-screen w-full  from-gray-900 to-black">
     <div className="w-full max-w-3xl mx-auto pt-8 px-4  p-4 flex justify-between items-center shadow-md z-10">
    
      <div className="text-xl font-bold">Your Library</div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <Plus size={20} />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-full">
          <Search size={20} />
        </button>
      </div>
     
     </div>
     <ExpandableCardDemo />
   </div>
  );
};

export default LibraryHeader;