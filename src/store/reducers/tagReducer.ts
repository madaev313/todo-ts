import { ITagState, TagAction, TagActionsTypes } from "../types/tag";

const initialState: ITagState = {
  tags: [],
  loading: false,
  error: null,
};

export const tagReducer = (
  state = initialState,
  action: TagAction
): ITagState => {
  switch (action.type) {
    case TagActionsTypes.TAG_PENDING:
      return { ...state, loading: true };
    case TagActionsTypes.TAG_SUCCESS:
      return { ...state, tags: action.payload };
    case TagActionsTypes.TAG_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
