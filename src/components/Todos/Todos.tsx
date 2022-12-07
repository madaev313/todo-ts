import React from "react";
import "./todos.css";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import Todo from "../Todo/Todo";
import "./todos.css";

const Todos = () => {
  const { todos } = useTypedSelector((state) => state.todo);

  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
