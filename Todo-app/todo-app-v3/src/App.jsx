import AppHeading from "./components/AppHeading";
import AddTodo from "./components/AddTodo";
import "./App.css";
import Message from "./components/message";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  // const addTodoItems1 = [
  //   {
  //     name: "Arsina",
  //     date: "5/2/1989",
  //   },
  //   {
  //     name: "Matoo BD",
  //     date: "5/8/1999",
  //   },
  //   {
  //     name: "Matoo",
  //     date: "5/8/1999",
  //   },
  //   {
  //     name: "AAPZ",
  //     date: "2/8/1999",
  //   },
  // ];

  const [addTodoItems, setTodoItems] = useState([]);

  const handleAddNewItem = (itemName, itemDate) => {
    const todoItemAdded = [...addTodoItems, { name: itemName, date: itemDate }];
    setTodoItems(todoItemAdded);
  };

  const handleDeleteItem = (todoItemName) => {
    const todoItemsDeleted = addTodoItems.filter(
      (item) => item.name !== todoItemName
    );
    setTodoItems(todoItemsDeleted);
  };

  return (
    <>
      <center className="main-cont">
        <AppHeading />
        <AddTodo onAddNewTodo={handleAddNewItem} />
        {addTodoItems.length === 0 && <Message />}
        <TodoItems
          newTodoItems={addTodoItems}
          onDeleteBtnClick={handleDeleteItem}
        />
      </center>
    </>
  );
}

export default App;
