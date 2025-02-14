import { useRef } from "react";
import VariableProximity from "../blocks/text-animations/VariableProximity";
import PixelTransition from "../blocks/Pixel-Transition/PixelTransition"; // Import PixelTransition

const Hero = () => {
  const containerRef = useRef(null);  // ✅ Define ref inside the component

  return (
    <section className="flex items-center justify-between h-screen mt-6 pl-16 md:pl-32 bg-[#000000] text-white">
      {/* Left side: Text and buttons */}
      <div ref={containerRef} className="max-w-2xl">
        {/* Animated Hero Title */}
        <VariableProximity
          label={`Visualize \n \n \n \n \n \n  Write \n Organize`}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
          className="text-6xl md:text-8xl font-bold font-['Futura'] leading-tight"
        />

        {/* Tagline */}
        <p className="mt-8 text-xl md:text-2xl text-[#AAAAAA] font-normal leading-snug">
          Your ultimate space for seamless note-taking <br />
          and collaboration
        </p>

        {/* Buttons */}
        <div className="mt-10 flex space-x-6">
          <button className="px-6 py-3 text-lg font-medium text-black bg-[#AC6AFF] rounded-md transition-all duration-300 hover:text-white">
            Get Started
          </button>
          <button className="px-6 py-3 text-lg font-medium text-white border border-white rounded-md transition-all duration-300 hover:border-white hover:text-[#AC6AFF]">
            Learn More
          </button>
        </div>
      </div>

      {/* Right side: PixelTransition effect */}
      <div className="flex-shrink-0 mr-40 w-[480px] h-[480px] relative">
        <PixelTransition
          firstContent={
            <img
              src="https://img.freepik.com/premium-vector/two-people-mentoring-finance-customer-strategy-vector-illustration-doodle-line-art_969863-274816.jpg"
              alt="Mentoring Finance Illustration"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111"
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "white" }}>Hello</p>
            </div>
          }
          gridSize={12}
          pixelColor="#ffffff"
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
      </div>
    </section>
  );
};

export default Hero;
