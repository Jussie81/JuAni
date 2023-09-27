import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl font-bold">
            JuAnimetion
          </div>
          <ul className="flex space-x-4">
            <li className="text-white">
            <button className=" hover:text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
              
            </li>
            <li className="text-white">
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li className="text-white">
              <a href="#" className="hover:text-gray-400">Services</a>
            </li>
            <li className="text-white">
            <a href="#" className="hover:text-gray-400">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;