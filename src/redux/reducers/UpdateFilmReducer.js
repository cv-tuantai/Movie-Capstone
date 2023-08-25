import * as ActionTypes from "../constants/UpdateFilmConstant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const UpdateFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_FILM_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionTypes.UPDATE_FILM_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionTypes.UPDATE_FILM_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default UpdateFilmReducer;
