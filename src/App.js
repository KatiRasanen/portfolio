import "./App.css";
import img from "./profile_pic.jpg";

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
