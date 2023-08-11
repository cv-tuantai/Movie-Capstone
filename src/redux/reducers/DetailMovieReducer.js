import * as ActionTypes from "../constants/DetailMovieConstants";

const initState = {
  loading: false,
  data: null,
  error: null,
};

const DetailMovieReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.DETAIL_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionTypes.DETAIL_MOVIE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionTypes.DETAIL_MOVIE_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default DetailMovieReducer;
