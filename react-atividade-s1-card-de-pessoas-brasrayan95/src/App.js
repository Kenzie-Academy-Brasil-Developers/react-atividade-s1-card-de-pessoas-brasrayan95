import "./App.css";
import Developer from "./components/Developer";

function App() {
  return (
    <div className="App">
      <Developer name="Rayan" age="26" country="Brasil" />
      <Developer name="Ciro" age="30" country="Brasil" />
      <Developer name="Thaís" age="22" country="Brasil" />
    </div>
  );
}

export default App;
