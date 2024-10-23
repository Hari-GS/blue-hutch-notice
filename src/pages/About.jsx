import React from "react";
import webLogo from "../assets/app-development.png";
import consultingImage from '../assets/consulting image.png';
import templatesImage from '../assets/Templates icon.png';
import dhGif from '../assets/DHDuo.gif';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="md:h-[140vh] md:pt-11 py-10 text-white">
      
      <p className="text-center items-center md:text-[18px] py-2 text-white flex flex-col">
        <div>
          Top Featured Products and Services Right Now
        </div>
        <div className="bg-[#DBFF5E] w-[300px] md:h-0.5 md:w-[390px] "></div>
      </p>

      <div className="md:h-[300px]  md:flex justify-center items-center gap-10">
      <Link to="/websites" className="cursor-pointer h-[250px] md:w-[280px] mx-4 rounded-[20px] mt-12 bg-[#DBFF5E] hover:bg-[#bcd65d] flex items-center flex-col justify-center transform transition-transform duration-300 hover:-translate-y-3">
          <img src={webLogo} alt="Web Development" className="w-[100px]" />
          <h5 className="max-w-[300px] mx-auto text-[18px] text-center pt-2 text-black">
            Custom Websites / Web Apps Development
          </h5>
        </Link>

        

        {/* Mentoring Box */}
        <div className="h-[250px] md:w-[280px] mx-4 rounded-[20px] md:mt-0 mt-5 bg-[#DBFF5E] flex items-center flex-col justify-center transform transition-transform duration-300 hover:-translate-y-3">
          <img src={consultingImage} alt="Mentoring" className="w-[100px]" />
          <h5 className="max-w-[300px] mx-auto text-[18px] text-center pt-2 text-black">
            Mentoring <br />
            <span className="text-[14px]"> (Will be opened very soon)</span>
          </h5>
        </div>
        {/* Pre-Built Websites Box */}
        <div className="h-[250px] md:w-[280px] mx-4 rounded-[20px] md:mt-0 mt-5 bg-[#DBFF5E] flex items-center flex-col justify-center transform transition-transform duration-300 hover:-translate-y-3">
          <img src={templatesImage} alt="Pre-Built Websites" className="w-[100px]" />
          <h5 className="max-w-[300px] mx-auto text-[18px] text-center pt-2 text-black">
            Pre-Built Websites <br />
            <span className="text-[14px]"> (Will be opened very soon)</span>
          </h5>
        </div>
      </div>

      {/* Flex Container for Paragraph, GIF and Name */}
      <div className="md:flex items-center pt-12 md:pt-20 md:px-24">
        {/* Left Side - Paragraph */}
        <div className="flex-1 md:pt-0 pt-5 px-4">
          <h1 className="md:text-[30px] text-[25px] md:pb-1">About Us</h1>
          <div className="bg-[#DBFF5E] h-1 w-[100px] mb-4"></div>
          <p className="md:w-3/4 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Middle - GIF */}
        <div className="md:flex-shrink-0 flex justify-center pt-14">
          <img 
            src={dhGif} 
            alt="Animated Reliability" 
            className="w-52 h-auto" 
          />
        </div>

        {/* Right Side - Name */}
        <div className="flex-shrink-0 text-center md:pt-0 py-3 md:text-right md:w-2/6">
          <p className="text-[24px] text-[#DBFF5E]">Hari & Deepan<br/><h5 className="text-white">The Developer Duo You'll Ever Need</h5></p>
        </div>
      </div>
    </div>
  );
};

export default About;
