import { TodoAction, TodosActionsTypes } from "../types/todo";
import { Dispatch } from "redux";
import axios from "axios";

export const uploadTodos = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodosActionsTypes.TODO_PENDING });
      const response = await axios.get("http://localhost:3000/todos");
      dispatch({
        type: TodosActionsTypes.TODO_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TodosActionsTypes.TODO_ERROR,
        payload: "ошибка при загрузке",
      });
    }
  };
};

export const updateTodo = (id: number) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodosActionsTypes.TODO_PENDING });
      const todo = await axios.get(`http://localhost:3000/todos/${id}`);
      const response = await axios.patch(`http://localhost:3000/todos/${id}`, {
        completed: !todo.data.completed,
      });
      dispatch({
        type: TodosActionsTypes.TODO_UPDATE,
        payload: id,
      });
    } catch (e) {
      dispatch({
        type: TodosActionsTypes.TODO_ERROR,
        payload: "ошибка при загрузке",
      });
    }
  };
};

export const deleteTodo = (id: number) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodosActionsTypes.TODO_PENDING });
      await axios.delete(`http://localhost:3000/todos/${id}`);
      dispatch({
        type: TodosActionsTypes.TODO_UPDATE,
        payload: id,
      });
    } catch (e) {
      dispatch({
        type: TodosActionsTypes.TODO_ERROR,
        payload: "ошибка при загрузке",
      });
    }
  };
};

export const addTodo = (body: {
  title: string;
  completed: boolean;
  tags: string[];
}) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodosActionsTypes.TODO_PENDING });
      const response = await axios.post(" http://localhost:3000/todos", body);
      dispatch({
        type: TodosActionsTypes.TODO_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TodosActionsTypes.TODO_ERROR,
        payload: "ошибка при загрузке",
      });
    }
  };
};
