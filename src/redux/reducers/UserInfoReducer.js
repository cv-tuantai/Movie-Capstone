import * as ActionTypes from "../constants/UserInfoConstant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_INFO_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionTypes.USER_INFO_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionTypes.USER_INFO_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default UserInfoReducer;
