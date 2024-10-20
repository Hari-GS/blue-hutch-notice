import React from "react";
import image from "../assets/background-hero.jpg";
import image1 from "../assets/logo.png";

import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  return (
    <div className="hero w-full  h-[150vh] mt-[-115px] ">
      <div className="pt-[100px]">
        <div className="h-[500px] w-full text-center  flex items-center justify-center py-[30px] flex-col">
          <h1 className="text-[46px] font-bold text-white">
            Transforming Ideas into Reality with <br /> Technology & Creativity
          </h1>
          <h1 className="text-[20px] pt-3 font-bold text-white">
            Your One-Stop Solution for Websites, <br /> Web Apps, Stock Images &
            More
          </h1>
          <button className="w-[190px] bg-slate-900 text-white rounded-full  border-2 py-[13px] mt-3 ">
            Explore our product
          </button>
        </div>
        <div className="   flex justify-center items-center w-full h-[500px] ">
          <Carousel controls>
            <Carousel.Item>
              <div className="bg-black w-[800px] h-[500px]">
                <img src={image} alt="" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="bg-black w-[800px] h-[500px]">
                <img src={image} alt="" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
