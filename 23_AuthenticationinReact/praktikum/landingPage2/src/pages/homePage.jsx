import React from "react";
import logoPage from "/src/images/logoPage.png";

const HomePage = () => {
  return (
    <div className="h-screen bg-blue-500">
      <div className="container mx-auto ">
        <div className="lg:flex items-center h-screen">
          <div className="lg:w-1/2 p-4">
            <h1 className="text-3xl lg:text-4xl xl:text-8xl font-bold mt-20  mb-4 text-white">
              Better Solutions For Your Business
            </h1>
            <p className="text-base lg:text-lg xl:text-3xl text-white">
              We are team of talented designers makin websites with...
            </p>
            <button className="text-white p-4 rounded-3xl mt-10 bg-blue-800 hover:bg-blue-700">
              Get Started
            </button>
            <button className="text-white p-4 ml-5 hover:border rounded-3xl">
              Watch Video
            </button>
          </div>
          <div className="lg:w-1/2 p-4">
            <img src={logoPage} alt="Hero bg" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
