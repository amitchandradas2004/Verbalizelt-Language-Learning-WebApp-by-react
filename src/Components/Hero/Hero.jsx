import React from "react";
import HeroImage from "../../assets/mobile.png";
const Hero = () => {
  return (
    <div className="container mx-auto mt-15 flex flex-col md:flex-row justify-between items-center gap-5 px-2 md:px-0">
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
  );
};

export default Hero;
