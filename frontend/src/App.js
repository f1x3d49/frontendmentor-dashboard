import { useContext } from "react";
import CardComponent from "./components/CardComponent";
import ProfileComponent from "./components/ProfileComponent";
import { timeData } from "./data";
import { TimeContext } from "./context/TimeContext/TimeContext";

function App() {
  const { time, setTime } = useContext(TimeContext);

  return (
    <div className="md:grid md:grid-cols-4 md:grid-rows-2 md:px-20 md:py-36 md:gap-16 min-h-screen bg-vdblue flex flex-col gap-4 py-12 px-4 ">
      <ProfileComponent />
      {time === "Weekly"
        ? timeData.map((data, key) => {
            return (
              <CardComponent
                key={key}
                title={data.title}
                current={data.timeframes.weekly.current}
                previous={data.timeframes.weekly.previous}
                timeTitle="Week"
              />
            );
          })
        : null}
      {time === "Monthly"
        ? timeData.map((data, key) => {
            return (
              <CardComponent
                key={key}
                title={data.title}
                current={data.timeframes.monthly.current}
                previous={data.timeframes.monthly.previous}
                timeTitle="Month"
              />
            );
          })
        : null}
      {time === "Daily"
        ? timeData.map((data, key) => {
            return (
              <CardComponent
                key={key}
                title={data.title}
                current={data.timeframes.daily.current}
                previous={data.timeframes.daily.previous}
                timeTitle="Day"
              />
            );
          })
        : null}
    </div>
  );
}

export default App;
