import React from "react";
import work from "../images/icon-work.svg";
import dots from "../images/icon-ellipsis.svg";

const CardComponent = ({ title }) => {
  return (
    <section className="w-full h-auto rounded-xl font-rubik">
      <div className="bg-lred rounded-t-xl py-6 overflow-hidden relative">
        <img src={work} alt="work" className="absolute -top-4 right-4" />
      </div>
      {/* Content */}
      <div className="flex items-center justify-between p-4 bg-dblue rounded-xl relative -mt-[1rem]">
        <div className="flex flex-col">
          <h1 className="text-white text-[18px] font-medium">{title}</h1>
          <h2 className="text-white text-3xl font-light">32hrs</h2>
        </div>
        <div className="flex flex-col gap-6">
          <img
            src={dots}
            alt="dots"
            className="self-end hover:cursor-pointer"
          />
          <p className="text-pablue font-light text-sm">Last Week - 36 hrs</p>
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
