import React, { useEffect } from "react";
import "./App.css";
import AddForm from "./components/AddForm/AddForm";
import Todos from "./components/Todos/Todos";
import Profile from "./components/Profile/Profile";
import { useTypedSelector } from "./store/hooks/useTypedSelector";
import { useActions } from "./store/hooks/useActions";

function App() {
  const { uploadProfile, uploadTodos, uploadTags } = useActions();

  useEffect(() => {
    uploadProfile();
    uploadTodos();
    uploadTags();
  }, []);

  return (
    <div className="App">
      <span className="about">To Do App</span>
      <AddForm />
      <Todos />
      <Profile />
    </div>
  );
}

export default App;
