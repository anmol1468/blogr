import React from "react";
import phonesIllustration from "../../assets/images/illustration-phones.svg";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner grid md:grid-cols-2 justify-center align-middle">
      <div className="illustration m-auto">
        <img src={phonesIllustration} alt="illustration of phones" />
      </div>
      <div className="info px-10 py-20 md:py-6">
        <h3 className="text-3xl font-bold pb-3">
          State of the Art Infrastructure
        </h3>
        <p className="opacity-70 text-sm tracking-wide">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  );
};

export default Banner;
