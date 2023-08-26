import * as ActionTypes from "../constants/UpdateUserConstant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const UpdateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionTypes.UPDATE_USER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionTypes.UPDATE_USER_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default UpdateUserReducer;
