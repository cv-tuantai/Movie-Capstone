import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <header className="p-3 bg-gray-800 bg-opacity-70 text-white fixed w-full z-10">
        <div className="container flex justify-between h-10 lg:px-16 px-6 mx-auto">
          <NavLink
            rel="noopener noreferrer"
            to=""
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png"
              alt=""
              className="w-3/5"
            />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 -mb-1 border-b-2"
                    : "flex items-center px-4 -mb-1"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 -mb-1 border-b-2"
                    : "flex items-center px-4 -mb-1"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/news"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 -mb-1 border-b-2"
                    : "flex items-center px-4 -mb-1"
                }
              >
                News
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 rounded">Sign in</button>
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Sign up
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
