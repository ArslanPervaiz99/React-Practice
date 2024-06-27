import { MdOutlineDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteBtnClick }) {
  return (
    <div className="container ">
      <div className="row todo-row">
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-btn"
            onClick={() => onDeleteBtnClick(todoName)}
          >
            <MdOutlineDelete className="new-btn" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
