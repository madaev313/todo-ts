import { ITodoState, TodoAction, TodosActionsTypes } from "../types/todo";

const initialState: ITodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction
): ITodoState => {
  switch (action.type) {
    case TodosActionsTypes.TODO_PENDING:
      return { ...state, loading: true };
    case TodosActionsTypes.TODO_SUCCESS:
      return { ...state, todos: action.payload };
    case TodosActionsTypes.TODO_UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          action.payload === todo.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case TodosActionsTypes.TODO_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodosActionsTypes.TODO_PENDING:
      return { ...state, loading: true, error: null };
    case TodosActionsTypes.TODO_DELETE:
      return {
        ...state,
        loading: false,
        error: null,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case TodosActionsTypes.TODO_PENDING:
      return { ...state, loading: true, error: null };
    case TodosActionsTypes.TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: [action.payload, ...state.todos],
      };
    default:
      return state;
  }
};
