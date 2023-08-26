import * as actionTypes from "../constants/DeleteUserConstant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const DeleteUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.DELETE_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case actionTypes.DELETE_USER_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };

    case actionTypes.DELETE_USER_FAIL:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default DeleteUserReducer;
