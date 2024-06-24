import design from "./App.module.css";
import InputDisplay from "./components/InputDisplay";
import BtnCont from "./components/BtnCont";
import { useState } from "react";

function App() {
  let [inputVal, setInputVal] = useState("");
  const onBtnClick = (btnText) => {
    if (btnText === "C") {
      setInputVal("");
    } else if (btnText === "=") {
      const result = eval(inputVal);
      setInputVal(result);
    } else {
      const inputValue = inputVal + btnText;
      setInputVal(inputValue);
    }
  };
  return (
    <center>
      <h1 className={design.head}>Calculator</h1>
      <div className={design.calcCont}>
        <InputDisplay displayInputVal={inputVal} />
        <BtnCont onButtonClick={onBtnClick} />
      </div>
    </center>
  );
}

export default App;
