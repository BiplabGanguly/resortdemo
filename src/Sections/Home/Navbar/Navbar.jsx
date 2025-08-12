import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import booknow from "../../../assets/img/booknow.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white">
      <div className="hidden md:flex justify-between w-full items-center px-25 lg:px-30 text-sm py-2 border-b border-[#6C6258] h-[60px]">
        <h2 className="tracking-widest ">
          Kuldiha, Near Kuldiha Bridge, Bamni, West Bengal 721501 
        
        </h2>
        <h2 className="tracking-widest flex justify-center items-center gap-2">
          For Bookings & Inquiry: +91 98833 56418, +91 03221 253229
            <img src={booknow} alt="" className="size-13 animate-pulse cursor-pointer" />
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://static.wixstatic.com/shapes/7befdd_346a73cdd7934a978978b5f4f67e48bc.svg"
                alt="Logo"
                className="w-30 h-30 object-contain"
              />
              <span className="text-2xl tracking-widest text-white">
                The Salbari
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center text-[15px]">
            <Link to="/" className="hover:text-[#B89D75] transition">Home</Link>
            <Link to="/" className="hover:text-[#B89D75] transition">About</Link>
            <Link to="/" className="hover:text-[#B89D75] transition">Rooms</Link>
            <Link to="/" className="hover:text-[#B89D75] transition">Contact</Link>

          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl"
            >
              {isOpen ? <IoClose /> : <CiMenuFries />}
            </button>
          </div>
        </div>
      </div>

     
        <div
          className={`md:hidden text-center overflow-hidden transition-all duration-300  ease-in-out px-4 text-white text-[14px] space-y-3 ${isOpen ? 'h-full opacity-100 pt-4 pb-6' : 'max-h-0 opacity-0 py-0'
            }`}
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-[#B89D75] transition text-xl">Home</Link>
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-[#B89D75] transition text-xl">About</Link>
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-[#B89D75] transition text-xl">Rooms</Link>
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-[#B89D75] transition text-xl">Contact</Link>
        </div>

      
    </nav>
  );
};

export default Navbar;
