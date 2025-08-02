import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white">
      <div className="hidden md:flex justify-between px-4 sm:px-6 lg:px-8 text-sm py-2 border-b border-[#6C6258]">
        <h2 className="tracking-widest">
          Kuldiha, Near Kuldiha Bridge, Bamni, West Bengal 721501
        </h2>
        <h2 className="tracking-widest">
          For Bookings & Inquiry: +91 98833 56418, +91 03221 253229
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://static.wixstatic.com/shapes/7befdd_346a73cdd7934a978978b5f4f67e48bc.svg"
                alt="Logo"
                className="w-10 h-10 object-contain size-30"
              />
              <span className="text-2xl font-bold tracking-widest text-white">
                The Salbari
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-yellow-400 transition">HOME</Link>
            <Link to="/about" className="hover:text-yellow-400 transition">ABOUT</Link>
            <Link to="/services" className="hover:text-yellow-400 transition">ROOMS</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition">CONTACT</Link>
            <button className="px-4 py-2 border border-yellow-100 hover:bg-white hover:text-black transition">
              Check Availability
            </button>
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

      {isOpen && (
        <div className="md:hidden text-white px-4 pb-6 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">HOME</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">ABOUT</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">ROOMS</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400">CONTACT</Link>
          <button className="w-full mt-2 px-4 py-2 border border-yellow-100 hover:bg-white hover:text-black transition">
            Check Availability
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
