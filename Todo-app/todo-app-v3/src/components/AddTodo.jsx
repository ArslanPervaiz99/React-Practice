import { useState } from "react";
import { MdAddTask } from "react-icons/md";

function AddTodo({ onAddNewTodo }) {
  const [addTodoName, setAddTodoName] = useState("");
  const [addTodoDate, setAddTodoDate] = useState("");

  const handleTodoInput = (e) => {
    setAddTodoName(e.target.value);
  };
  const handleTodoDate = (e) => {
    setAddTodoDate(e.target.value);
  };

  const handleAddBtnClick = (e) => {
    e.preventDefault();
    onAddNewTodo(addTodoName, addTodoDate);
    setAddTodoName("");
    setAddTodoDate("");
  };
  return (
    <div className="container text-center">
      <form className="row todo-row" onSubmit={handleAddBtnClick}>
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter Todo"
            value={addTodoName}
            onChange={handleTodoInput}
          />
        </div>
        <div className="col-5">
          <input type="date" value={addTodoDate} onChange={handleTodoDate} />
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
