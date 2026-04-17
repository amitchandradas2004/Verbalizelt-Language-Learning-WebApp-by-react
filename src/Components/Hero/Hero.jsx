import React from "react";
import HeroImage from "../../assets/mobile.png";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import visa from "../../assets/visa.png";
import spotify from "../../assets/spotify.png";
import linkdin from "../../assets/linkdin.png";
import zoom from "../../assets/zoom.png";
const Hero = () => {
  return (
    <div className="container mx-auto mt-15 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-2 md:px-0">
        <div className="space-y-4 w-full md:w-2/3">
          <h3 className="text-7xl md:text-8xl font-bold leading-[90px] tracking-tight">
            We make you learn language easily!
          </h3>
          <p className="text-xl font-medium">
            We help you learn language easily, witjh small lessons , you`ll earn
            points and unlock new levels while improving you rel world
            communications.
          </p>
          <form className="items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#7070702a] rounded-full border-none outline-none w-60 pl-5 h-10"
            />
            <button className="btn btn-warning rounded-full text-black ml-2">
              Get Started
            </button>
          </form>
        </div>
        <div>
          <img src={HeroImage} className=" " />
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between gap-8 items-center mt-5">
        <div class="left flex justify-between gap-45 items-center">
          <div class="relative">
            <img src={img1} />
            <img src={img2} class="absolute top-0 left-10" />
            <img src={img3} class="absolute top-0 left-20" />
            <img src={img4} class="absolute top-0 left-30" />
            <img src={img5} class="absolute top-0 left-40" />
          </div>
          <div>
            <h4>Students Enroll</h4>
          </div>
        </div>
        <div class="right flex gap-5 justify-between items-center">
          <img src={visa} class="w-15" />
          <img src={spotify} class="w-15" />
          <img src={linkdin} class="w-15" />
          <img src={zoom} class="w-15" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
