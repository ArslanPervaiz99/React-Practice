import design from "./InputDisplay.module.css";

function InputDisplay({ displayInputVal }) {
  return (
    <input className={design.inputBox} type="text" value={displayInputVal} />
  );
}
export default InputDisplay;
