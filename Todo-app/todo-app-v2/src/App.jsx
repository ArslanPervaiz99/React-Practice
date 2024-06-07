import AppHeading from "./components/AppHeading";
import AddTodo from "./components/AddTodo";
import "./App.css";

import TodoItems from "./components/TodoItems";

function App() {
  const addTodoItems = [
    {
      name: "Arsina",
      date: "5/2/1989",
    },
    {
      name: "Matoo BD",
      date: "5/8/1999",
    },
    {
      name: "Matoo",
      date: "5/8/1999",
    },
    {
      name: "AAPZ",
      date: "2/8/1999",
    },
  ];

  return (
    <>
      <center className="main-cont">
        <AppHeading />
        <AddTodo />
        <TodoItems newTodoItems={addTodoItems} />
      </center>
    </>
  );
}

export default App;
