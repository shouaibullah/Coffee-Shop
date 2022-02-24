import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

const SearchBar = () => {
  return (
    <div className=" absolute top-16 right-2 lg:right-10 h-16 w-96 z-40 bg-neutral-900 flex items-center justify-center">
      <div className="flex justify-between px-2 items-center bg-[#1d1d1d] w-[21rem] h-10">
        <input
          className=" bg-[#1d1d1d] w-full focus:outline-none "
          placeholder="Search"
          type="text"
        />
        <SearchIcon className=" h-6" />
      </div>
    </div>
  );
};

export default SearchBar;
