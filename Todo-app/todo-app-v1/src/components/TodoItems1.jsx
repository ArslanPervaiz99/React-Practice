function TodoItems1() {
  let todoName = "Arsina";
  let todoDate = "5/2/1989";
  return (
    <div className="container ">
      <div className="row todo-row">
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItems1;
