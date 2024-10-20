import React from "react";
import webLogo from "../assets/app-development.png";
import about from "../assets/about-img.png";
const About = () => {
  return (
    <div className="h-[140vh] py-5  text-white">
      <h1 className="text-center text-[45px]  text-white  uppercase">
        vanakam
      </h1>
      <p className="text-center text-[22px] py-2 text-white ">
        welcome to the hutch sodtware and solutions
      </p>
      <div className=" h-[400px] flex justify-center items-center gap-10">
        <div className="w-[400px] h-[250px] rounded-[20px] bg-[#98FF98]  flex items-center flex-col justify-center">
          <img src={webLogo} alt="sa" className="w-[100px] " />
          <h5 className="max-w-[300px] mx-auto text-[18px] text-center pt-2 text-black">
            custom website / web apps development
          </h5>
        </div>
        <div className="w-[400px] h-[250px] rounded-[20px]  bg-[#98FF98] flex items-center flex-col justify-center ">
          <img src={webLogo} alt="sa" className="w-[100px] " />
          <h5 className="max-w-[300px] mx-auto text-[18px] text-center pt-2 text-black">
            custom website / web apps development
          </h5>
        </div>
        <div className="w-[400px] h-[250px] rounded-[20px] bg-[#98FF98] flex items-center flex-col justify-center  ">
          <img src={webLogo} alt="sa" className="w-[100px] " />
          <h5 className="max-w-[300px] mx-auto text-[18px] text-center pt-2 text-black">
            custom website / web apps development
          </h5>
        </div>
      </div>
      <div className=" h-[500px]  flex items-center justify-around">
        <div className=" flex-1 flex   flex-col h-full pt-[80px] pl-[100px]">
          <h1 className="uppercase pt-5 pl-5 text-[30px] ">about me </h1>
          <div className="bg-white h-1 w-[100px] ml-8 mt-1"></div>
          <p className="max-w-[75%]  pl-5 pt-9 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            expedita? Esse quos sapiente laborum et magnam consequatur enim
            ipsum unde facere eligendi accusantium voluptatum, maiores obcaecati
            sint corrupti perspiciatis quaerat.
          </p>
          <button className="bg-white text-black w-[200px] ml-5 py-2 rounded-full mt-3">
            check our product
          </button>
        </div>
        <div className=" flex-1 ">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
