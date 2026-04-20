import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";

const Learn = () => {
  return (
    <div className="bg-[#FFCE31] py-15 mt-10">
      <h2 className="text-7xl lg:text-8xl font-bold text-center">
        Learn a new language for free downlaod app Now!
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-2 justify-center mt-5">
        <div className="flex items-center bg-black border rounded-full text-white w-60 h-18 border-none">
          <span className="text-6xl pl-3">
            {" "}
            <IoLogoApple />
          </span>
          <div>
            <h3 className="text-sm font-medium">Download on the</h3>
            <h3 className="text-2xl font-bold">App Store</h3>
          </div>
        </div>
        <div className="flex items-center bg-black border rounded-full text-white w-60 h-18 border-none">
          <span className="text-4xl pl-5">
            {" "}
            <FaGooglePlay />
          </span>
          <div>
            <h3 className="text-sm font-medium">Download on the</h3>
            <h3 className="text-2xl font-bold">Google Play</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
