import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import logo from "../assets/B (2).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:h-[95px] h-20 flex items-center justify-between px-3 w-full md:relative absolute z-50 bg-[#6EACDA]">
      {/* Left Section: Logo and Name */}
      <div className="flex items-center space-x-4 md:pl-6 md:pt-5 md:w-1/2">
        <img src={logo} alt="logo" className="w-[50px] sm:w-[60px]" />
        <h1 className="text-[#03346E] font-bold text-[22px] sm:text-[28px]">
          Blue Hutch
        </h1>
      </div>

      {/* Right Section: Hamburger Icon */}
      <div className="md:hidden z-50">
        <button
          onClick={toggleMenu}
          className="text-[#E4E0E1] text-3xl focus:outline-none"
        >
          <i className={isOpen ? "fa-solid fa-times" : "text-[#03346E] fa-solid fa-bars"}></i>
        </button>
      </div>

      {/* Mobile Full-Width Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 z-40 bg-gray-800 bg-opacity-90 flex flex-col justify-center items-center md:hidden`}
      >
        <nav className="flex flex-col space-y-8 text-center">
          <Link
            to="/"
            onClick={toggleMenu}  // Close menu on link click
            className="text-[#E4E0E1] text-2xl"
          >
            Home
          </Link>
          <Link
            
            onClick={toggleMenu}
            className="text-gray-500 text-2xl"
          >
            Products
          </Link>
          <Link
           
            onClick={toggleMenu}
            className="text-gray-500  text-2xl"
          >
            Services
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-[#E4E0E1] text-2xl"
          >
            About
          </Link>
        </nav>
      </div>

      {/* Desktop Links Section */}
      <div className="hidden md:flex md:items-center md:w-auto md:pr-10 md:pt-3">
        <nav className="flex md:space-x-36">
          <Link
            to="/"
            className="link text-[#03346E] text-[18px] relative group md:text-lg"
          >
            <span className="group-hover:text-white">
              Home
            </span>
            <span className="block h-[2px] bg-[#03346E] scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 w-full"></span>
          </Link>

          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="link cursor-pointer text-[#03346E] text-[18px] relative group md:text-lg"
            >
            <span className="group-hover:text-white">
              Products
            </span>
            <span className="block h-[2px] bg-[#03346E] scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 w-full"></span>
            <span className="absolute hidden group-hover:block text-sm text-[#E4E0E1] bg-[#03346E] p-2 rounded-md -top-10 left-1/2 w-40 transform -translate-x-1/2 mt-20">
              Other products will be opened soon. Scroll down to Featured
            </span>
          </Link>
          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="link cursor-pointer text-[#03346E] text-[18px] relative group md:text-lg"
            >
            <span className="group-hover:text-white">
              Services
            </span>
            <span className="block h-[2px] bg-[#03346E] scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 w-full"></span>
            <span className="absolute hidden group-hover:block text-sm text-[#E4E0E1] bg-[#03346E] p-2 rounded-md -top-10 left-1/2 w-40 transform -translate-x-1/2 mt-20">
              Other services will be opened soon. Scroll down to Featured
            </span>
          </Link>
          <Link
            to="/about"
            className="link text-[#03346E] text-[18px] relative group md:text-lg"
          >
            <span className="group-hover:text-white">
              About Us
            </span>
            <span className="block h-[2px] bg-[#03346E] scale-x-0 group-hover:scale-x-100 absolute bottom-0 left-0 w-full"></span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
