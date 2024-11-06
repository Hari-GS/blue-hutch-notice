import React from "react";
import webLogo from "../assets/app-development.png";
import consultingImage from '../assets/consulting image.png';
import templatesImage from '../assets/Templates icon.png';
import dhGif from '../assets/new duo image.gif';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCheckToSlot, faLayerGroup} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="md:pt-11 py-10 text-[#03346E] bg-[#6EACDA]">
      
      <p className="text-center items-center md:text-[18px] py-2 text-[#03346E] flex flex-col">
        <div className="font-bold">
          Featured
        </div>
        <div className="bg-[#03346E] w-[300px] md:h-0.5 md:w-[90px] "></div>
      </p>

      <div className="md:h-[300px]  md:flex justify-center items-center gap-10">
      <Link to="/websites" className="cursor-pointer h-[250px] md:w-[280px] mx-4 rounded-[20px] mt-12 bg-[#03346E] hover:bg-[#255e89] flex items-center flex-col justify-center transform transition-transform duration-300 hover:-translate-y-3">
          <FontAwesomeIcon icon={faLaptopCode} className="text-[100px] text-[#F5F5F5]" />
          <h5 className="max-w-[300px] mx-auto text-[18px] text-center pt-2 text-[#F5F5F5]">
            To Build Custom Websites
          </h5>
        </Link>

        

        {/* Mentoring Box */}
        <div className="h-[250px] md:w-[280px] mx-4 rounded-[20px] md:mt-0 mt-5 bg-[#03346E] flex items-center flex-col justify-center transform transition-transform duration-300 hover:-translate-y-3">
          <FontAwesomeIcon icon={faCheckToSlot} className="text-[100px] text-[#E4E0E1]"/>
          <h5 className="max-w-[300px] mx-auto text-[18px] text-center pt-2 text-[#E4E0E1]">
            Our Past Works <br />
            <span className="text-[14px]"> (Will be opened very soon)</span>
          </h5>
        </div>
        {/* Pre-Built Websites Box */}
        <div className="h-[250px] md:w-[280px] mx-4 rounded-[20px] md:mt-0 mt-5 bg-[#03346E] flex items-center flex-col justify-center transform transition-transform duration-300 hover:-translate-y-3">
          <FontAwesomeIcon icon={faLayerGroup} className="text-[100px] text-[#F5F5F5]"/>
          <h5 className="max-w-[300px] mx-auto text-[18px] text-center pt-2 text-[#F5F5F5]">
            Pre-Built Websites <br />
            <span className="text-[14px]"> (Will be opened very soon)</span>
          </h5>
        </div>
      </div>

      {/* Flex Container for Paragraph, GIF and Name */}
      <div className="md:flex items-center pt-12 md:pt-52 md:px-24 md:pb-40 gap-5">
        {/* Left Side - Paragraph */}
        <div className="flex-1 md:pt-0 pt-5 px-4 bg-[#03346E] rounded-[20px] md:mx-0 mx-3 md:pb-0 pb-3">
          <h1 className="md:text-[30px] text-[25px] md:pb-0 text-[#F5F5F5]">Our Story</h1>
          <p className=" text-[#F5F5F5]">
              It all started with a boy who has a passion for software development but knew he didn’t want to be confined to a traditional 9-to-5 job. Driven by a vision to create something impactful, I built this platform to connect those in need of quality digital solutions with reliable, affordable services.

              Me and My small team specialized in developing custom websites and web applications tailored to you and your business needs. Whether you're a startup or an established brand, we’re here to bring your vision to life with dedication and precision.

              As we embark on this journey, our focus is on delivering reliability and building trust with our clients, prioritizing long-term relationships over short-term profits, That's why we are doing this at highly affordable price. We're excited to start small, but we have big expansion plans for the future.

              Give us the opportunity to serve you, and let’s create something amazing together. Thank you for considering us.
          </p>
        </div>

        {/* Middle - GIF
        <div className="md:flex-shrink-0 flex justify-center pt-14">
          <img 
            src={dhGif} 
            alt="Animated Reliability" 
            className="w-52 h-auto" 
          />
        </div> */}

        {/* Right Side - Name */}
        <div className="flex-shrink-0 text-center md:pt-0 py-3 md:text-right md:w-2/6">
          <p className="text-[24px] text-[#03346E] font-bold">Hari & Team<br/><h5 className="text-[#03346E]">The Developers team You'll Ever Need</h5></p>
          <p className="md:text-[17px] text-base">For Orders : <br/>+91 6369312803 - WhatsApp preferred<br/>Email : bluehutch01@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;
