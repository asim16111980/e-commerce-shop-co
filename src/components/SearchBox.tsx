import { Search } from "lucide-react";
import React from "react";

const SearchBox = () => {
  return (
    <div className="w-full h-11 flex items-center gap-2 bg-white border-gray-500 border rounded-md px-4">
      <Search className="min-w-4 min-h-4 text-black"/>
      <input type="search" className="min-w-32 max-w-full text-gray-500 border-0 outline-0 text-sm" placeholder="Search" />
    </div>
  );
};

export default SearchBox;
