import * as ActionTypes from "../constants/AddUserConstant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const AddUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionTypes.ADD_USER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionTypes.ADD_USER_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default AddUserReducer;
