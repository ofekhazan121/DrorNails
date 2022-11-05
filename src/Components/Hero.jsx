import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-secondary font-bold p-2">
          Premium manicure and pedicure service for nail health
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          created with love, attention, and devotion.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Specializes in
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={[
              "Acrylics",
              "Gel Manicure",
              "Basic Manicure",
              "Dip Powder",
            ]}
            typeSpeed={140}
            backSpeed={180}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-base-100">
          Our tables are littered with information on healthy eating and
          vitamins for healthy nails and skin.
        </p>
        <button className="bg-secondary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-neutral">Contact</button>
      </div>
    </div>
  );
};

export default Hero;
