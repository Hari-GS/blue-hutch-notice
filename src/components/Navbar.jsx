import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="h-[65px] bg-[#181D3D] relative z-10 flex justify-between items-center mx-[100px] mt-5 rounded-full">
      <div className="   flex-1">
        <img src={logo} alt="sa" className="w-[80px]" />
      </div>
      <nav className="flex flex-1    ">
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          to="home"
          className=" link cursor-pointer mx-[50px]  text-white text-[16px]  uppercase  "
        >
          Home
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          to="home"
          className="link cursor-pointer mx-[20px] text-white text-[16px]  uppercase "
        >
          About
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          to="home"
          className="link cursor-pointer mx-[20px] text-white text-[16px]  uppercase "
        >
          Services
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          to="home"
          className="link cursor-pointer mx-[20px] text-white text-[16px]  uppercase "
        >
          Projects
        </Link>
      </nav>
      <button className="  px-8 bg-[#FBFBFC] ml-[100px] py-2 font-semibold justify-center items-center inline-block rounded-full text-[19px] mr-5 ">
        contact
      </button>
    </div>
  );
};

export default Navbar;
