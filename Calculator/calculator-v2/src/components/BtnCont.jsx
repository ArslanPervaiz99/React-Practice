import design from "./BtnCont.module.css";
const BtnCont = () => {
  const btnName = [
    "1",
    "2",
    "3",
    "/",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "-",
    "C",
    "0",
    ".",
    "+",
  ];
  return (
    <div className={design.btnCont}>
      {btnName.map((buttonName) => (
        <button className={design.btn}>{buttonName}</button>
      ))}
    </div>
  );
};
export default BtnCont;
