import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaLaptopCode } from 'react-icons/fa';
import './nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>
      <nav className="bg-slate-100 shadow-md fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

          {/* Logo with Icon and Styling */}
          <Link to="hero" smooth={true} duration={500} className="flex items-center gap-2 cursor-pointer group">
            <div className="text-black bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 p-2 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 animate-bounce-slow">
              <FaLaptopCode size={28} />
            </div>
            <span className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              UI<span className="text-pink-600">byte</span>jas
            </span>
          </Link>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none p-2 rounded-lg bg-slate-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul className={`flex-col md:flex-row md:flex md:space-x-4 tracking-widest text-black font-medium absolute md:static bg-slate-100 w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : 'top-[-200px]'}`}>
            <li><Link to="hero" smooth={true} offset={-145} duration={500} onClick={toggleMenu} className="block px-4 py-2 hover:text-blue-500 cursor-pointer">Home</Link></li>
            <li><Link to="about" smooth={true} offset={0} duration={500} onClick={toggleMenu} className="block px-4 py-2 hover:text-blue-500 cursor-pointer">About</Link></li>
            <li><Link to="work" smooth={true} offset={0} duration={500} onClick={toggleMenu} className="block px-4 py-2 hover:text-blue-500 cursor-pointer">Project</Link></li>
            <li><Link to="skills" smooth={true} offset={0} duration={500} onClick={toggleMenu} className="block px-4 py-2 hover:text-blue-500 cursor-pointer">Services</Link></li>
            <li><Link to="contact" smooth={true} offset={0} duration={500} onClick={toggleMenu} className="block  px-4 py-2 hover:text-blue-500 cursor-pointer">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}




export default Nav;
