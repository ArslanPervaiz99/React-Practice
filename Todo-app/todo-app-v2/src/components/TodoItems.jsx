import TodoItem from "./TodoItem";

function TodoItems({ newTodoItems }) {
  return (
    <div className="items-cont">
      {newTodoItems.map((item) => (
        <TodoItem key={item.name} todoDate={item.date} todoName={item.name} />
      ))}
    </div>
  );
}
export default TodoItems;
