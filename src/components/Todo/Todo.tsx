import React, { FC } from "react";
import { ITodo } from "../../store/types/todo";
import "./todo.css";
import { useActions } from "../../store/hooks/useActions";
import { deleteTodo } from "../../store/actions/actionsTodo";

interface ITodoProps {
  todo: ITodo;
}

const Todo: FC<ITodoProps> = ({ todo }) => {
  const { updateTodo, deleteTodo } = useActions();
  const { id, tags, title, completed } = todo;

  return (
    <div className="todo">
      <div className="todo__content">
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => updateTodo(id)}
          />
        </div>
        <div>
          <p>{title}</p>
        </div>
        <button onClick={() => deleteTodo(id)}>x</button>
      </div>
      <div>
        {tags.map((tag) => (
          <pre>{tag}</pre>
        ))}
      </div>
    </div>
  );
};

export default Todo;
