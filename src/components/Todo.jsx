import Footer from "./Footer";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]); // State containing All todo items
  const completedTodos = todos.filter((todo) => todo.doneStatus).length;
  const totalTodos = todos.length;

  return (
    <div>
      {/** Todo input component */}
      <Form todos={todos} setTodos={setTodos} />

      {/** Todo List component */}
      <TodoList todos={todos} setTodos={setTodos} />

      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
