import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow">
      <div className="flex justify-between px-4 sm:px-6 lg:px-8 uppercase text-sm py-2 text-white max-w-7xl mx-auto">
        <div>
          <h2 className="">
            Kuldiha, Near Kuldiha Bridge, Bamni, West Bengal 721501
          </h2>
        </div>
        <div>
          <h2>
            For Bookings & Inquiry
            +91 98833 56418,
            +91 03221 253229</h2>
        </div>

      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white flex justify-center items-center ">
            <img src="https://static.wixstatic.com/shapes/7befdd_346a73cdd7934a978978b5f4f67e48bc.svg" alt="" className="size-30"/>
              THE SALBARI
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center gap-5">
            <Link to="/" className="text-white hover:text-blue-500 font-medium">
              HOME
            </Link>
            <Link to="/about" className="text-white hover:text-blue-500 font-medium">
              ABOUT
            </Link>
            <Link to="/services" className="text-white hover:text-blue-500 font-medium">
              ROOMS
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-500 font-medium">
              CONTACT
            </Link>
            <div>
              <button className="px-3 py-2 border
              cursor-pointer
              border-yellow-100
               text-white hover:bg-white hover:text-gray-600 
               ">Check Availability</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none text-2xl"
            >
              {isOpen ? <IoClose /> : <CiMenuFries />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-white hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-white hover:text-blue-500">
            About
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block text-white hover:text-blue-500">
            Services
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-white hover:text-blue-500">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
