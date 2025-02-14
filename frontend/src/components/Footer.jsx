import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa6";
import logo from "../assets/logo.png"; // Adjust the path as needed

const Footer = () => {
  return (
    <>
      <footer className="text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12"> {/* Increased gap for spacing */}
            
            {/* Logo & Socials */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="Uninote Logo" className="h-12 w-auto" />
                <span className="text-xl font-bold text-white mb-3">UNINOTE</span>
              </div>
              
              <div className="flex space-x-4 mt-12">
                <FaInstagram className="w-5 h-5 text-gray-700 hover:text-black transition" />
                <FaXTwitter className="w-5 h-5 text-gray-700 hover:text-black transition" />
                <FaLinkedin className="w-5 h-5 text-gray-700 hover:text-black transition" />
                <FaFacebook className="w-5 h-5 text-gray-700 hover:text-black transition" />
                <FaYoutube className="w-5 h-5 text-gray-700 hover:text-black transition" />
              </div>
              
              <button className="border border-gray-400 px-4 py-2 mt-8 text-sm rounded-md flex items-center space-x-2 hover:bg-gray-100 transition">
                <span>🌍 English</span>
              </button>

              {/* Added margin below the button for extra spacing */}
              <div className="mt-5">
                <p className="text-sm text-gray-500">
                  <a href="#" className="hover:underline">Do Not Sell or Share My Info</a> | 
                  <a href="#" className="hover:underline mt-2"> Cookie settings</a>
                </p>
                
                <p className="text-sm text-gray-500 mt-2">© 2025 Uninote Labs, Inc.</p>
              </div>
            </div>

            {/* Footer Links with Added Spacing */}
            <div>
              <h3 className="font-semibold mb-5">Company</h3> {/* Increased margin below heading */}
              <ul className="space-y-2 text-gray-600"> {/* Increased spacing between links */}
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Security</a></li>
                <li><a href="#" className="hover:underline">Status</a></li>
                <li><a href="#" className="hover:underline">Terms & privacy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-5">Download</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">iOS & Android</a></li>
                <li><a href="#" className="hover:underline">Mac & Windows</a></li>
                <li><a href="#" className="hover:underline">Calendar</a></li>
                <li><a href="#" className="hover:underline">Web Clipper</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-5">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">Help center</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Community</a></li>
                <li><a href="#" className="hover:underline">Integrations</a></li>
                <li><a href="#" className="hover:underline">Templates</a></li>
                <li><a href="#" className="hover:underline">Affiliates</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-5">Uninote for</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:underline">Enterprise</a></li>
                <li><a href="#" className="hover:underline">Small business</a></li>
                <li><a href="#" className="hover:underline">Personal</a></li>
              </ul>
              <p className="mt-6 font-semibold hover:underline cursor-pointer">Explore more →</p>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
