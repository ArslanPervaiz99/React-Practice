import "./App.css";
import ClockHead from "./components/ClockHead";
import ClockText from "./components/ClockText";
import CurrentTime from "./components/CurrentTime";
function App() {
  return (
    <>
      <center>
        <ClockHead />
        <ClockText />
        <CurrentTime />
      </center>
    </>
  );
}

export default App;
