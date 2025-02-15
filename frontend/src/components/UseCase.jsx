import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next"; // ✅ Import translation hook
import CardSecondDemo from "../blocks/3D-Card/CardSecondDemo"; // Adjusted import path

const UseCase = () => {
  const { t } = useTranslation(); // ✅ Initialize translation

  return (
    <div className="mt-24 px-6 md:px-32 flex flex-col md:flex-row justify-between items-center relative">
      {/* Left-aligned content */}
      <div className="max-w-2xl z-10 mt-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.3]">
          {t("built_for_everyone")}
        </h1>
        <h1 className="text-5xl mt-3 md:text-6xl font-extrabold text-white leading-[1.3]">
          {t("designed_for_you")}
        </h1>

        <p className="text-base md:text-lg text-gray-400 mt-4">
          {t("usecase_tagline")}
        </p>

        <Link
          to="/docs" // ✅ Link to /docs
          className="inline-flex items-center gap-2 mt-6 text-base md:text-lg font-medium text-[#AC6AFF] hover:underline"
        >
          {t("explore_docs")} <ArrowRight size={20} />
        </Link>
      </div>

      {/* Right-aligned floating 3D card with overlap */}
      <div className="absolute right-0 md:right-40 top-10 md:-top-24 w-[20rem] md:w-[28rem] z-0">
        <CardSecondDemo />
      </div>
    </div>
  );
};

export default UseCase;
