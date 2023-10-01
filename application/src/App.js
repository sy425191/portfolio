import "./App.css";
import Landing from "./pages/landing";
import Project from "./pages/project";

function App() {
  return (
    <div>
      <div className="page" id="landing">
        <Landing />
      </div>
      <div className="page" id="project">
        <Project />
      </div>
    </div>
  );
}

export default App;
