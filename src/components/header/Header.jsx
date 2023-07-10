import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header grid place-content-center h-screen text-white">
      <h1 className="text-5xl font-semibold p-1">
        A modern publishing platform
      </h1>
      <p className="font-sm mt-3">
        Grow your audience and build your online brand.
      </p>
      <div className="buttons mt-5">
        <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded-full shadow-md bg-white hover:bg-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
          Start for Free
        </button>
        <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-300 rounded-full border-2 border-solid border-white shadow-md bg-deep-purple-accent-400 hover:text-orange-500 hover:bg-white focus:shadow-outline focus:outline-none">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Header;
