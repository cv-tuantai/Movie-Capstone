import * as ActionTypes from "../constants/GetUserInfoConstant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const GetUserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_INFO_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionTypes.GET_USER_INFO_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionTypes.GET_USER_INFO_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default GetUserInfoReducer;
