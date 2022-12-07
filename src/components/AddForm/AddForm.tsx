import React, { useState } from "react";
import "./AddForm.css";
import { useActions } from "../../store/hooks/useActions";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
const AddForm = () => {
  const { tags } = useTypedSelector((state) => state.tag);
  console.log(tags);
  const [value, setValue] = useState("");
  const [tag, setTeg] = useState("");
  const { addTodo } = useActions();
  const addNewTodo = () => {
    const body = {
      title: value,
      completed: false,
      tags: [tag],
    };
    addTodo(body);
    setValue("");
  };
  return (
    <div className="AddForm">
      <select value={tag} onChange={(e) => setTeg(e.currentTarget.value)}>
        {tags.map((tag) => {
          return <option value={tag}>{tag}</option>;
        })}
      </select>
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
