import {
  IProfile,
  IProfileState,
  ProfileAction,
  ProfileActionsTypes,
} from "../types/profile";

const initialState: IProfileState = {
  profile: {} as IProfile,
  loading: false,
  error: null,
};

export const profileReducer = (
  state = initialState,
  action: ProfileAction
): IProfileState => {
  switch (action.type) {
    case ProfileActionsTypes.PROFILE_PENDING:
      return { ...state, loading: true };
    case ProfileActionsTypes.PROFILE_SUCCESS:
      return { ...state, profile: action.payload };
    case ProfileActionsTypes.PROFILE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
