import { Search } from "lucide-react";
import React from "react";

const SearchBox = () => {
  return (
    <div className="w-full h-11 flex items-center gap-2 bg-white border-gray-500 border rounded-md px-4">
      <Search className="text-black"/>
      <input type="search" className="text-gray-500 border-none outline-none text-sm" placeholder="Search" />
    </div>
  );
};

export default SearchBox;
