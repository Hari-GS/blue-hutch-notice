import React from "react";
import image from "../assets/websites off banner.png";
import image1 from "../assets/logo.png";
import About from "./About";
import Testinomial from "../components/Testinomial";

import Carousel from "react-bootstrap/Carousel";

function Hero  () {
  return (
    <div className="pt-16 md:pt-8">
    <div className=" pb-60 " style={{
        background: "linear-gradient(195deg, rgb(228, 224, 225) 37%, rgb(73, 54, 40) 100%)",
      }}>
      <div className="pt-[0px]">
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
      <div className="text-center">
        <h1 className="text-[#493628] font-bold text-xl ">வணக்கம் | Welcome! We are Specialized in Developing Websites for Hotels and Restaurants</h1>
      </div>
    </div>
    <About/>
    </div>
  );
};

export default Hero;


