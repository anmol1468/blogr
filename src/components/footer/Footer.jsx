import React from "react";

const Footer = () => {
  return (
    <div className="px-4 pt-16 pb-4 bg-black text-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide">Blogr</span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3 lg:grid-cols-4 lg:text-left">
          <div>
            <p className="font-semibold tracking-wide pb-3">Product</p>
            <ul className="mt-2 space-y-2 opacity-60">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide pb-3">Company</p>
            <ul className="mt-2 space-y-2  opacity-60">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide pb-3">Connect</p>
            <ul className="mt-2 space-y-2  opacity-60">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
