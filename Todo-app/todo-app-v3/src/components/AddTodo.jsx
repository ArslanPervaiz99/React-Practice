import { useState } from "react";

function AddTodo({ onAddNewTodo }) {
  const [addTodoName, setAddTodoName] = useState("");
  const [addTodoDate, setAddTodoDate] = useState("");

  const handleTodoInput = (e) => {
    setAddTodoName(e.target.value);
  };
  const handleTodoDate = (e) => {
    setAddTodoDate(e.target.value);
  };

  const handleAddBtnClick = () => {
    onAddNewTodo(addTodoName, addTodoDate);
    setAddTodoName("");
    setAddTodoDate("");
  };
  return (
    <div className="container text-center">
      <div className="row todo-row">
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
          <button
            type="button"
            className="btn btn-success todo-btn"
            onClick={handleAddBtnClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
