
import React from 'react';
import logo from '../assets/plums.webp';
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid'; 


const Header = () => {
  return (
    <header className= 'flex justify-between align-middle'>
    <img className='w-24 h-24' src={logo.src} alt="Logo" />
      <h1 className={'flex text-5xl text-center'}>
        Plums
        </h1>
        <div className="flex gap-4 p-4">
      <MagnifyingGlassIcon className="w-8 h-8" />
      <Bars3Icon className="w-8 h-8" />
      </div>
    </header>
  );
};

export default Header;
