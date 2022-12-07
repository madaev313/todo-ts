import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActionsCreators from "../actions/actionsTodo";
import * as TagActionsCreators from "../actions/actionsTag";
import * as ProfileActionsCreators from "../actions/actionsProfile";

const rootActionsCreator = {
  ...TodoActionsCreators,
  ...TagActionsCreators,
  ...ProfileActionsCreators,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(rootActionsCreator, dispatch);
};
