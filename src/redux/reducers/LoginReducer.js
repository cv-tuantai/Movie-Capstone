import * as ActionTypes from "../constants/LoginConstants";

const initState = {
  loading: false,
  data: null,
  error: null,
};

const LoginReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionTypes.LOGIN_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionTypes.LOGIN_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    case ActionTypes.LOGIN_CLEAR:
      state.loading = false;
      state.data = null;
      state.error = null;
      return { ...state };

    default:
      return { ...state };
  }
};

export default LoginReducer;
