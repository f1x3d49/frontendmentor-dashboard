import React, { useState } from "react";
import { TimeContext } from "./TimeContext";

const TimeContextProvider = ({ children }) => {
  const [time, setTime] = useState("Weekly");

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  );
};

export default TimeContextProvider;
