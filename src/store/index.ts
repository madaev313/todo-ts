import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { todoReducer } from "./reducers/todoReducer";
import { tagReducer } from "./reducers/tagReducer";
import { profileReducer } from "./reducers/profileReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  tag: tagReducer,
  profile: profileReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
