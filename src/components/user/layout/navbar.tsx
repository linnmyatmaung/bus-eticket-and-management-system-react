import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import Logo from "@/assets/images/logo.png";

import ChatAssistant from "@/features/chat-assistant";
import Footer from "@/components/user/layout/Footer";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm px-4 py-5 z-50">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Trip Hub Logo" className="h-10 w-auto" />
            <span className="text-xl font-semibold uppercase">Trip Hub</span>
          </Link>

          {/* Hamburger button for mobile */}
          <button
            className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                // Close icon (X)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation links */}
          <ul
            className={`flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mt-4 sm:mt-0 w-full sm:w-auto sm:flex ${
              menuOpen ? "block" : "hidden"
            } sm:block`}
          >
            <li>
              <Link
                to="/"
                className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="pt-20">
        {" "}
        {/* Increased padding for fixed navbar */}
        <Outlet />
        <ChatAssistant />
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
