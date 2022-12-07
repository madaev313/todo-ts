export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  tags: string[];
}

export interface ITodoState {
  todos: ITodo[];
  loading: boolean;
  error: null | string;
}

export enum TodosActionsTypes {
  TODO_PENDING = "pending",
  TODO_SUCCESS = "todo/success",
  TODO_UPDATE = "todo/update",
  TODO_DELETE = "todo/delete",
  TODO_ERROR = "error",
}

interface TodoPendingAction {
  type: TodosActionsTypes.TODO_PENDING;
}

interface TodoSuccessAction {
  type: TodosActionsTypes.TODO_SUCCESS;
  payload: ITodo[];
}

interface TodoUpdateAction {
  type: TodosActionsTypes.TODO_UPDATE;
  payload: number;
}

interface TodoDeleteAction {
  type: TodosActionsTypes.TODO_DELETE;
  payload: number;
}

interface TodoErrorAction {
  type: TodosActionsTypes.TODO_ERROR;
  payload: string;
}

interface TodoAdd {
  type: TodosActionsTypes.TODO_PENDING;
}

interface TodoAddSUCCESS {
  type: TodosActionsTypes.TODO_SUCCESS;
  payload: ITodo;
}

export type TodoAction =
  | TodoSuccessAction
  | TodoPendingAction
  | TodoUpdateAction
  | TodoDeleteAction
  | TodoErrorAction
  | TodoAdd
  | TodoAddSUCCESS;
