import React from "react";
import image from "../assets/websites off banner.png";
import image1 from "../assets/logo.png";
import About from "./About";
import Testinomial from "../components/Testinomial";

import Carousel from "react-bootstrap/Carousel";

function Hero  () {
  return (
    <div>
    <div className=" pb-60 " style={{
        background: "linear-gradient(rgb(110, 172, 218) 37%, rgb(245, 245, 245) 100%)",
      }}>
      <div className="pt-[60px] md:pt-[30px]">
      <div className="   flex justify-center items-center py-16 px-3">
        <Carousel controls>
            <Carousel.Item>
              <div className="bg-black md:w-[700px] rounded-3xl ">
                <img src={image} alt="" className="w-full h-full object-cover rounded-3xl"/>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="bg-black md:w-[700px] rounded-3xl ">
                <img src={image} alt="" className="w-full h-full object-cover rounded-3xl" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        
      </div>
      <div className="text-center md:px-0 px-2">
        <h1 className="text-[#03346E] font-bold text-xl ">வணக்கம் | Welcome! We are Specialized in Developing Websites for Hotels and Restaurants</h1>
      </div>
    </div>
    <About/>
    </div>
  );
};

export default Hero;


