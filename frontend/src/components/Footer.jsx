import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa6";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next"; // Translation hook

const Footer = () => {
  const { i18n, t } = useTranslation(); // Get translation functions
  const [language, setLanguage] = useState("🌍 English");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageChange = (lang, langCode) => {
    setLanguage(lang);
    i18n.changeLanguage(langCode); // Change language globally
    setShowDropdown(false);
  };

  return (
    <footer className="text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          
          {/* Logo & Socials */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt={t("notify_name")} className="h-12 w-auto" />
              <span className="text-xl font-bold text-white mb-3">
                {t("notify")}
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-12">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-5 h-5 text-gray-700 hover:text-white transition duration-300" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-5 h-5 text-gray-700 hover:text-white transition duration-300" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5 text-gray-700 hover:text-white transition duration-300" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-5 h-5 text-gray-700 hover:text-white transition duration-300" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-5 h-5 text-gray-700 hover:text-white transition duration-300" />
              </a>
            </div>

            {/* Language Selector */}
            <div className="relative inline-block">
              <button
                className="border border-gray-400 px-4 py-2 mt-4 text-sm rounded-md flex items-center justify-between space-x-2 hover:bg-gray-100 hover:text-black transition w-40"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span>{language}</span>
                <FaChevronDown className="w-4 h-4" />
              </button>

              {showDropdown && (
                <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-md">
                  <ul className="py-2 text-sm">
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleLanguageChange("🌍 English", "en")}
                    >
                      English
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleLanguageChange("🇯🇵 日本語", "ja")}
                    >
                      日本語 (Japanese)
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleLanguageChange("🇮🇳 हिंदी", "hi")}
                    >
                      हिंदी (Hindi)
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Additional Links & Copyright */}
            <div className="mt-5">
              <p className="text-sm text-gray-500">
                <a href="#" className="hover:underline">{t("do_not_sell")}</a> |{" "}
                <a href="#" className="hover:underline">{t("cookie_settings")}</a>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                © {new Date().getFullYear()} Notify Labs. All rights reserved.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="font-semibold mb-5">{t("company")}</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/about" className="hover:underline">{t("about_us")}</Link></li>
              <li><Link to="/careers" className="hover:underline">{t("careers")}</Link></li>
              <li><Link to="/security" className="hover:underline">{t("security")}</Link></li>
              <li><Link to="/status" className="hover:underline">{t("status")}</Link></li>
              <li><Link to="/terms" className="hover:underline">{t("terms_privacy")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5">{t("download")}</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/mobile-apps" className="hover:underline">{t("mobile_apps")}</Link></li>
              <li><Link to="/desktop-apps" className="hover:underline">{t("desktop_apps")}</Link></li>
              <li><Link to="/calendar-sync" className="hover:underline">{t("calendar_sync")}</Link></li>
              <li><Link to="/browser-extension" className="hover:underline">{t("browser_extension")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5">{t("resources")}</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/help-center" className="hover:underline">{t("help_center")}</Link></li>
              <li><Link to="/pricing" className="hover:underline">{t("pricing")}</Link></li>
              <li><Link to="/blog" className="hover:underline">{t("blog")}</Link></li>
              <li><Link to="/community" className="hover:underline">{t("community")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5">{t("notify_for")}</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/enterprise" className="hover:underline">{t("enterprise")}</Link></li>
              <li><Link to="/small-business" className="hover:underline">{t("small_business")}</Link></li>
              <li><Link to="/personal" className="hover:underline">{t("personal")}</Link></li>
            </ul>
            <p className="mt-6 font-semibold hover:underline cursor-pointer">
              <Link to="/explore">{t("explore_more")} →</Link>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
