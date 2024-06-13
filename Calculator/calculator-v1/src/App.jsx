import design from "./App.module.css";
import InputDisplay from "./components/InputDisplay";
import BtnCont from "./components/BtnCont";

function App() {
  return (
    <center>
      <h1 className={design.head}>Calculator</h1>
      <div className={design.calcCont}>
        <InputDisplay />
        <BtnCont />
      </div>
    </center>
  );
}

export default App;
