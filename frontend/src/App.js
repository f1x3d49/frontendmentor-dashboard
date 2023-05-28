import CardComponent from "./components/CardComponent";
import ProfileComponent from "./components/ProfileComponent";

function App() {
  return (
    <div className="min-h-screen bg-vdblue flex flex-col gap-4 py-12 px-4">
      <ProfileComponent />
      <CardComponent title="Work" />
    </div>
  );
}

export default App;
