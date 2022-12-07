export interface IProfile {
  username: string;
  profile_img: string;
}

export interface IProfileState {
  profile: IProfile;
  loading: boolean;
  error: null | string;
}

export enum ProfileActionsTypes {
  PROFILE_PENDING = "pending",
  PROFILE_SUCCESS = "success",
  PROFILE_ERROR = "error",
}

interface ProfilePendingAction {
  type: ProfileActionsTypes.PROFILE_PENDING;
}

interface ProfileSuccessAction {
  type: ProfileActionsTypes.PROFILE_SUCCESS;
  payload: IProfile;
}

interface ProfileErrorAction {
  type: ProfileActionsTypes.PROFILE_ERROR;
  payload: string | null;
}

export type ProfileAction =
  | ProfileSuccessAction
  | ProfilePendingAction
  | ProfileErrorAction;
