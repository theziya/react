import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";


function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold">
        Tech Guide
      </Link>

      <div className="flex items-center mx-4">
        <input
          type="text"
          className="bg-gray-700 rounded-full px-4 py-2 w-64 text-white focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Search..."
        />
        <button className="bg-gray-800 hover:bg-gray-700 rounded-full px-4 py-2 ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      {toggle ? (
         <AiOutlineClose
         onClick={() => setToggle(!toggle)}
         className='text-white text-2xl md:hidden block'
       />
      ) : (
        <AiOutlineMenu
          onClick={() => setToggle(!toggle)}
          className='text-white text-2xl md:hidden block'
        />
       
      )}
      <ul className="hidden md:flex text-white gap-5"> 
      <li className="mx-4">
          <Link to="/home" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/company" className="text-white hover:text-gray-300">Company</Link>
        </li>
        <li className="mx-4">
          <Link to="/resources" className="text-white hover:text-gray-300">Resources</Link>
        </li>
        <li className="mx-4">
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        </li>
        <li className="mx-4">
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </li>
        <li className="mx-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Sign Up
          </button>
        </li>
      </ul>
      {/*responcive menu */}
      <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[72px] ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
      <li className="mx-4 p-5">
          <Link to="/home" className="text-white hover:text-gray-300 p-5">Home</Link>
        </li>
        <li className="mx-4 p-5">
          <Link to="/company" className="text-white hover:text-gray-300 p-5">Company</Link>
        </li>
        <li className="mx-4 p-5">
          <Link to="/resources" className="text-white hover:text-gray-300 p-5">Resources</Link>
        </li>
        <li className="mx-4 p-5">
          <Link to="/about" className="text-white hover:text-gray-300 p-5">About Us</Link>
        </li>
        <li className="mx-4 p-5">
          <Link to="/contact" className="text-white hover:text-gray-300 p-5">Contact Us</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
