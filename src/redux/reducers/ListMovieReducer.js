import * as ActionTypes from "../constants/ListMovieConstant";

const initState = {
  loading: false,
  data: null,
  error: null,
};

const ListMovieReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.LIST_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionTypes.LIST_MOVIE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionTypes.LIST_MOVIE_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default ListMovieReducer;
