import { ProfileAction, ProfileActionsTypes } from "../types/profile";
import { Dispatch } from "redux";
import axios from "axios";

export const uploadProfile = () => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    try {
      dispatch({ type: ProfileActionsTypes.PROFILE_PENDING });
      const response = await axios.get("http://localhost:3000/profile");
      dispatch({
        type: ProfileActionsTypes.PROFILE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ProfileActionsTypes.PROFILE_ERROR,
        payload: "ошибка при загрузке",
      });
    }
  };
};
