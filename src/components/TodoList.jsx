import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.doneStatus) - Number(b.doneStatus));

  return (
    <div className={styles.listContainer}>
      {/**Loop through each todo item and create an item */}
      {sortedTodos.map((item, index) => (
        <TodoItem item={item} key={index} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
