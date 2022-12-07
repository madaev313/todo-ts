export interface ITagState {
  tags: string[];
  loading: boolean;
  error: string | null;
}

export enum TagActionsTypes {
  TAG_PENDING = "pending",
  TAG_SUCCESS = "tag/success",
  TAG_ERROR = "error",
}

interface TagPendingActions {
  type: TagActionsTypes.TAG_PENDING;
}

interface TagSuccessActions {
  type: TagActionsTypes.TAG_SUCCESS;
  payload: string[];
}

interface TagErrorActions {
  type: TagActionsTypes.TAG_ERROR;
  payload: string;
}

export type TagAction = TagPendingActions | TagSuccessActions | TagErrorActions;
