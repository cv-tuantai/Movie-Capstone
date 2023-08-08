import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const data = useSelector((state) => state.TheaterReducer.data);
  const loading = useSelector((state) => state.TheaterReducer.loading);

  const renderPartner = () => {
    if (loading) return <div>Loading...</div>;

    return data?.map((partner, index) => {
      return (
        <a href="#" key={index}>
          <img src={partner.logo} width={50} alt="logo" />
        </a>
      );
    });
  };

  return (
    <footer className="bg-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap text-center order-first">
          <div className="md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white hover:text-red-500 tracking-widest text-2xl mb-3">
              PARTNER
            </h2>
            <nav className="list-none sm:mb-4 md:mb-0 grid grid-cols-6 gap-14">
              {renderPartner()}
            </nav>
          </div>

          <div className="md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white hover:text-red-500 text-2xl tracking-widest mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  placeholder="Email"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-slate-50  rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-600">
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              src="https://i.imgur.com/lC22izJ.png"
              width={50}
              alt="cybersoft"
            />
            <span className="ml-3 text-xl text-white hover:text-red-500">
              Cybersoft
            </span>
          </a>
          <p className="text-sm text-white hover:text-red-500 sm:ml-6 sm:mt-0 mt-4">
            © 2020 All rights reserved{" "}
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-white hover:text-red-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-white hover:text-red-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-white hover:text-red-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-white hover:text-red-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
