import AppHeading from "./components/AppHeading";
import AddTodo from "./components/AddTodo";
import "./App.css";

import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const addTodoItems1 = [
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

  const [addTodoItems, setTodoItems] = useState(addTodoItems1);

  const handleAddNewItem = (itemName, itemDate) => {
    const todoItemAdded = [...addTodoItems, { name: itemName, date: itemDate }];
    setTodoItems(todoItemAdded);
  };

  return (
    <>
      <center className="main-cont">
        <AppHeading />
        <AddTodo onAddNewTodo={handleAddNewItem} />
        <TodoItems newTodoItems={addTodoItems} />
      </center>
    </>
  );
}

export default App;
