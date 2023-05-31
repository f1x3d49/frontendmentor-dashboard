import { useContext } from "react";
import CardComponent from "./components/CardComponent";
import ProfileComponent from "./components/ProfileComponent";
import { timeData } from "./data";
import { TimeContext } from "./context/TimeContext/TimeContext";

function App() {
  const { time, setTime } = useContext(TimeContext);
  return (
    <div className="min-h-screen bg-vdblue flex flex-col gap-4 py-12 px-4">
      <ProfileComponent />
      {timeData.map((data, key) => {
        return <CardComponent key={key} title={data.title} />;
      })}
    </div>
  );
}

export default App;
