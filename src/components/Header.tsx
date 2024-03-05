import React from "react";
import logo from "../assets/plums.webp";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className='flex flex-col md:flex-row justify-between items-center px-4 py-2 md:px-8 md:py-4'>
      <div className='flex items-center'>
        <img className='w-16 h-16 md:w-24 md:h-24' src={logo.src} alt="Logo" />
        <h1 className='text-xl md:text-3xl font-bold ml-2'>Plums</h1>
      </div>
      <div className='flex items-center mt-4 md:mt-0'>
        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 border-2 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
          />
          <MagnifyingGlassIcon className="absolute top-3 right-3 w-5 h-5 text-gray-500" />
        </div>
        <Bars3Icon className="w-8 h-8 ml-4" />
      </div>
    </header>
  );
};

export default Header;
