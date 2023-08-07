import * as ActionTypes from "../constants/TheaterConstant";

const initState = {
  loading: false,
  data: null,
  error: null,
};

const TheaterReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.THEATER_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionTypes.THEATER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionTypes.THEATER_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default TheaterReducer;
