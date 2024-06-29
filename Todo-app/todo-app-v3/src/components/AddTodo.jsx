import { useRef, useState } from "react";
import { MdAddTask } from "react-icons/md";

function AddTodo({ onAddNewTodo }) {
  // const [addTodoName, setAddTodoName] = useState("");
  // const [addTodoDate, setAddTodoDate] = useState("");

  // use this one instead of useState
  const addTodoElement = useRef();
  const addTodoDateElement = useRef();

  /** const handleTodoInput = (e) => {
    setAddTodoName(e.target.value);
  };
  const handleTodoDate = (e) => {
    setAddTodoDate(e.target.value);
  };  */

  const handleAddBtnClick = (e) => {
    e.preventDefault();
    const addTodoDate = addTodoDateElement.current.value;
    const addTodoName = addTodoElement.current.value;
    addTodoDateElement.current.value = "";
    addTodoElement.current.value = "";
    onAddNewTodo(addTodoName, addTodoDate);
    // setAddTodoName("");
    // setAddTodoDate("");
  };
  return (
    <div className="container text-center">
      <form className="row todo-row" onSubmit={handleAddBtnClick}>
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter Todo"
            ref={addTodoElement}
            // value={addTodoName}
            // onChange={handleTodoInput}
          />
        </div>
        <div className="col-5">
          <input
            type="date"
            ref={addTodoDateElement}
            // value={addTodoDate}
            // onChange={handleTodoDate}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success todo-btn">
            <MdAddTask className="new-btn" />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
