import AppHeading from "./components/AppHeading";
import AddTodo from "./components/AddTodo";
import TodoItems1 from "./components/TodoItems1";
import TodoItems2 from "./components/TodoItems2";
import "./App.css";
function App() {
  return (
    <>
      <center className="main-cont">
        <AppHeading />
        <AddTodo />
        <div className="items-cont">
          <TodoItems1 />
          <TodoItems2 />
        </div>
      </center>
    </>
  );
}

export default App;
