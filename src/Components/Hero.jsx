import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-secondary font-bold p-2">
          שירות מניקור ופדיקור לבריאות הציפורניים
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          נוצר באהבה, תשומת לב ומסירות.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            מתמחה ב
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["אקריל", "לק ג'ל", "מניקור", "אבקת טבילה"]}
            typeSpeed={140}
            backSpeed={180}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-base-100">
          השולחנות שלנו עמוסים במידע על תזונה בריאה וויטמינים לציפורניים ולעור
          בריאים.
        </p>
        <button className="bg-secondary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-neutral">
          צור קשר
        </button>
      </div>
    </div>
  );
};

export default Hero;
