import {
  ChangeCheckboxAction,
  DeleteTodoAction,
  ITodoState,
  NewTodoAction,
  TodoAction,
  TodosActionsTypes,
} from "../types/todo";

const initialState: ITodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: TodoAction | NewTodoAction | ChangeCheckboxAction | DeleteTodoAction
): ITodoState => {
  switch (action.type) {
    case TodosActionsTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodosActionsTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, error: null, todos: action.payload };
    case TodosActionsTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload, todos: [] };
    case TodosActionsTypes.FETCH_CHANGE_CHECKBOX:
      return { ...state, loading: true, error: null };
    case TodosActionsTypes.FETCH_CHANGE_CHECKBOX_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          action.payload === todo.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case TodosActionsTypes.FETCH_CHANGE_CHECKBOX_ERROR:
      return { ...state, loading: false, error: action.payload, todos: [] };
    case TodosActionsTypes.FETCH_DELETE_TODOS:
      return { ...state, loading: true, error: null };
    case TodosActionsTypes.FETCH_DELETE_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case TodosActionsTypes.FETCH_ADD_TODOS:
      return { ...state, loading: true, error: null };
    case TodosActionsTypes.FETCH_ADD_TODOS_SUCCESS:
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
