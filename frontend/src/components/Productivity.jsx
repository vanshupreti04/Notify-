import React from "react";
import AppleCardsSecondDemo from "../blocks/Apple-Cards/AppleCardSecondDemo"; // ✅ Imported Apple Cards Carousel

const Productivity = () => {
  return (
    <div className="mt-80 flex flex-col items-center text-center">
      {/* Heading */}
      <h1 className="text-8xl md:text-7xl font-extrabold text-white">
        Maximize your Productivity
      </h1>

      {/* Tagline */}
      <p className="text-base md:text-lg text-gray-400 mt-8 max-w-2xl">
        Smart features designed to help you focus and get things done.
      </p>

      {/* ✅ Apple Cards Section (Added Below Tagline) */}
      <div className="mt-2 w-full">
        <AppleCardsSecondDemo />
      </div>
    </div>
  );
};

export default Productivity;
