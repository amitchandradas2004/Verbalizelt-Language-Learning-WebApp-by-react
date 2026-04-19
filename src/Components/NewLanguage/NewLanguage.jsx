import React from "react";
import Global from "../../assets/global.png";
const NewLanguage = () => {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <div className="text-center space-y-4 py-5">
        <h2 className="text-6xl lg:text-7xl font-bold">
          Learn a new language the fun way
        </h2>
        <p className="text-xl font-medium">
          Reach your language goals fast with the world`s #1 education app
        </p>
      </div>
      <div className="py-5">
        <img src={Global} className="w-[80%] mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-0">
        <div className="text-center border border-gray-300 rounded-2xl p-5 bg-gray-100 transition hover:-translate-y-0.5 space-y-3 shadow-yellow-200 shadow-sm">
          <h3 className="text-6xl font-bold">4.5k+</h3>
          <p className="font-medium">Daily register from new users</p>
        </div>
        <div className="text-center border border-gray-300 rounded-2xl p-5 bg-gray-100 transition hover:-translate-y-0.5 space-y-3 shadow-yellow-200 shadow-sm">
          <h3 className="text-6xl font-bold">1.5k+</h3>
          <p className="font-medium">Language In the world</p>
        </div>
        <div className="text-center border border-gray-300 rounded-2xl p-5 bg-gray-100 transition hover:-translate-y-0.5 space-y-3 shadow-yellow-200 shadow-sm">
          <h3 className="text-6xl font-bold">1000+</h3>
          <p className="font-medium">Total learners in the world</p>
        </div>
      </div>
    </div>
  );
};

export default NewLanguage;
