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
      <div className="absolute w-80 h-36 rounded-xl z-0  bg-red-500 inset-x-auto inset-y-16"></div>
    </div>
  );
};

export default ProfileComponent;
