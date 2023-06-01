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
      <div className="grid grid-cols-2  p-6 bg-dblue rounded-xl relative -mt-[1rem] md:h-full">
        <h1 className="text-white text-[18px] font-medium">{title}</h1>
        <img
          src={dots}
          alt="dots"
          className="self-center justify-self-end hover:cursor-pointer"
        />
        <h2 className="text-white text-3xl font-light md:text-5xl">
          {current}hrs
        </h2>

        <p className="text-pablue font-light text-sm self-center justify-self-end md:col-start-1 md:self-start">
          Last {timeTitle} - {previous} hrs
        </p>
      </div>
    </section>
  );
};

export default CardComponent;
