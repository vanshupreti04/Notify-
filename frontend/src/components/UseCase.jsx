import React from "react";
import { ArrowRight } from "lucide-react";
import CardSecondDemo from "../blocks/3D-Card/CardSecondDemo"; // Adjusted import path

const UseCase = () => {
  return (
    <div className="mt-24 px-6 md:px-32 flex flex-col md:flex-row justify-between items-center relative">
      {/* Left-aligned content */}
      <div className="max-w-2xl z-10 mt-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.3]">
          Built for Everyone,
        </h1>
        <h1 className="text-5xl mt-3 md:text-6xl font-extrabold text-white leading-[1.3]">
          Designed for You.
        </h1>

        <p className="text-base md:text-lg text-gray-400 mt-4">
          The ultimate tool to streamline your workflow, enhance creativity, and boost productivity—effortlessly.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2 mt-6 text-base md:text-lg font-medium text-[#AC6AFF] hover:underline"
        >
          Explore Docs <ArrowRight size={20} />
        </a>
      </div>

      {/* Right-aligned floating 3D card with overlap */}
      <div className="absolute right-0 md:right-40 top-10 md:-top-24 w-[20rem] md:w-[28rem] z-0">
        <CardSecondDemo />
      </div>
    </div>
  );
};

export default UseCase;
