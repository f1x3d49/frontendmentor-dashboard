import React from "react";
import jeremy from "../images/image-jeremy.png";

const ProfileComponent = () => {
  return (
    <div className="z-10">
      <div className="relative z-10 w-full h-24 bg-pblue rounded-xl flex items-center justify-center space-x-4">
        <img
          src={jeremy}
          alt="jeremy"
          className="w-14 h-14 object-contain ring-2 ring-white rounded-full"
        />
        <div className="text-white font-rubik">
          <h2 className="text-sm text-pablue font-light">Report for</h2>
          <h1 className="text-lg">Jeremy Robson</h1>
        </div>
      </div>
      <ul className="flex justify-between md:flex-col items-center md:items-start gap-3 px-6 rounded-b-xl -mt-[0.32rem] py-5 md:py-8 lg:py-5 bg-dblue">
        <li>
          <a
            id="btn"
            href="/"
            className="text-deblue hover:text-white transition duration-300 ease-in-out text-base sm:text-lg"
          >
            Daily
          </a>
        </li>
        <li>
          <a
            id="btn"
            href="/"
            className="text-deblue hover:text-white transition duration-300 ease-in-out text-base sm:text-lg"
          >
            Weekly
          </a>
        </li>
        <li>
          <a
            id="btn"
            href="/"
            className="text-deblue hover:text-white transition duration-300 ease-in-out text-base sm:text-lg"
          >
            Monthly
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileComponent;
