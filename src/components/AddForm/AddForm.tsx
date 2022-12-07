import React, { useState } from "react";
import "./AddForm.css";
import { useActions } from "../../store/hooks/useActions";

const AddForm = () => {
  const [value, setValue] = useState("");
  const { addTodo } = useActions();
  const addNewTodo = () => {
    const body = {
      title: value,
      completed: false,
      tags: ["1"],
    };
    addTodo(body);
    setValue("");
  };
  return (
    <div className="AddForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <button onClick={addNewTodo}>+</button>
    </div>
  );
};

export default AddForm;
