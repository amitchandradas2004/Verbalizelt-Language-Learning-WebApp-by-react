import React from "react";
import img1 from "../../assets/Group-1.png";
import img2 from "../../assets/Group-2.png";
const   Learning = () => {
  return (
    <div className="container mx-auto py-10 select-none">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <h2 className="text-6xl lg:text-7xl font-bold">
          Why you'll love learning with Verbalizelt
        </h2>
        <p className="text-xl font-medium">
          Reach your goals your whay with features designed for the fastets,
          most fun way to learn a language.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-10 ">
        <span className="relative w-[90%] md:w-[50%] bg-[#FFF0BF] pt-70 md:px-10 lg:px-20 rounded-t-2xl">
          {" "}
          <span className="absolute top-5 left-1/2  -translate-x-1/2 text-center ">
            <h4 className="text-3xl font-bold">Make progress Quickly</h4>
            <p className="text-sx">
              Combining the best of all and language science, lessons are
              tailored to help you learn at just the right level and place.
            </p>
          </span>
          <img src={img1} className="w-50 md:w-60 mx-auto" />
        </span>
        <span className="relative w-[90%] md:w-[50%] bg-[#FFF0BF] pt-70 md:px-10 lg:px-20 rounded-t-2xl">
          {" "}
          <span className="absolute top-15 left-1/2  -translate-x-1/2 text-center">
            <h4 className="text-3xl font-bold">Personalized Learning</h4>
            <p className="text-sx">
              Research shows our courses effectively and efficency teach
              reading, listening and speak skills.
            </p>
          </span>
          <img src={img2} className="w-50 md:w-60 mx-auto" />
        </span>
      </div>
    </div>
  );
};

export default Learning;
