import "./App.css";
import img from "./profile_pic.jpg";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-74408969-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <img src={img} className="profilePicture" alt="profile picture" />
      <p>
        Kati Räsänen
        <br /> Software developer
      </p>
    </div>
  );
}

export default App;
