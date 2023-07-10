import React from "react";
import "./features.scss";

const Features = ({ features, img, reverse, title }) => {
  const mobile = window.screen.width <= 768;

  return (
    <>
      {title && (
        <h3 className="text-3xl pt-10 font-semibold tracking-wide">{title}</h3>
      )}
      <div
        className={`features grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 place-content-center py-16 ${
          reverse ? "reverse" : ""
        }`}
      >
        <div
          className={`px-16 ${
            mobile
              ? "col-start-1 row-start-2"
              : reverse
              ? "col-start-2 row-start-1"
              : ""
          }`}
        >
          {features.map(({ title, description }) => {
            return (
              <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6 md:text-left">
                <h2 className="mb-5 font-sans text-xl font-medium tracking-tight text-black sm:text-xl sm:leading-none">
                  {title}
                </h2>
                <p className="mb-5 text-base text-gray-700 md:text-md">
                  {description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className={`h-100 ${
            reverse ?? mobile ? "md:col-start-1 md:row-start-1:" : ""
          }`}
        >
          <img
            className="w-100 object-cover w-full rounded lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={img}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Features;
