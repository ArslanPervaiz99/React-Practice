import TodoItem from "./TodoItem";

const TodoItems = ({ newTodoItems, onDeleteBtnClick }) => {
  return (
    <div className="items-cont">
      {newTodoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.date}
          todoName={item.name}
          onDeleteBtnClick={onDeleteBtnClick}
        />
      ))}
    </div>
  );
};
export default TodoItems;
