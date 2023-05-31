import React from "react";
import work from "../images/icon-work.svg";
import exercise from "../images/icon-exercise.svg";
import play from "../images/icon-play.svg";
import care from "../images/icon-self-care.svg";
import social from "../images/icon-social.svg";
import study from "../images/icon-study.svg";
import dots from "../images/icon-ellipsis.svg";

const CardComponent = ({ title, current, previous, timeTitle }) => {
  const Img = () => {
    if (title === "Work") return work;
    if (title === "Exercise") return exercise;
    if (title === "Play") return play;
    if (title === "Self Care") return care;
    if (title === "Social") return social;
    if (title === "Study") return study;
  };

  const Bg = () => {
    if (title === "Work") return "bg-lred";
    if (title === "Exercise") return "bg-lgreen";
    if (title === "Play") return "bg-sblue";
    if (title === "Self Care") return "bg-sorange";
    if (title === "Social") return "bg-violet";
    if (title === "Study") return "bg-studyred";
  };

  return (
    <section className="w-full h-auto rounded-xl font-rubik">
      <div className={`${Bg()} rounded-t-xl py-6 overflow-hidden relative`}>
        <img src={Img()} alt={title} className="absolute -top-4 right-4" />
      </div>
      {/* Content */}
      <div className="flex items-center justify-between p-4 bg-dblue rounded-xl relative -mt-[1rem]">
        <div className="flex flex-col">
          <h1 className="text-white text-[18px] font-medium">{title}</h1>
          <h2 className="text-white text-3xl font-light">{current}hrs</h2>
        </div>
        <div className="flex flex-col gap-6">
          <img
            src={dots}
            alt="dots"
            className="self-end hover:cursor-pointer"
          />
          <p className="text-pablue font-light text-sm">
            Last {timeTitle} - {previous} hrs
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
