import { TagAction, TagActionsTypes } from "../types/tag";
import { Dispatch } from "redux";
import axios from "axios";

export const uploadTags = () => {
  return async (dispatch: Dispatch<TagAction>) => {
    try {
      dispatch({ type: TagActionsTypes.TAG_PENDING });
      const response = await axios.get("  http://localhost:3000/tags");
      dispatch({
        type: TagActionsTypes.TAG_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TagActionsTypes.TAG_ERROR,
        payload: "ошибка при загрузке",
      });
    }
  };
};
