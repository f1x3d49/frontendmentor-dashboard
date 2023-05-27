import CardComponent from "./components/CardComponent";
import ProfileComponent from "./components/ProfileComponent";

function App() {
  return (
    <div className="min-h-screen bg-vdblue flex flex-col gap-2 py-12 px-4">
      <ProfileComponent />
      <CardComponent />
    </div>
  );
}

export default App;
