function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row todo-row">
        <div className="col-5">
          <input type="text" placeholder="Enter Todo" />
        </div>
        <div className="col-5">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success todo-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
