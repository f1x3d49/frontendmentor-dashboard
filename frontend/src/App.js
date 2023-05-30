import CardComponent from "./components/CardComponent";
import ProfileComponent from "./components/ProfileComponent";
import TimeContextProvider from "./context/TimeContext/TimeContextProvider";

function App() {
  return (
    <div className="min-h-screen bg-vdblue flex flex-col gap-4 py-12 px-4">
      <TimeContextProvider>
        <ProfileComponent />
        <CardComponent title="Work" />
      </TimeContextProvider>
    </div>
  );
}

export default App;
