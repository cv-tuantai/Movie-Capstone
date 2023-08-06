import * as ActionTypes from "../constants/CarouselConstant";

const initState = {
  loading: false,
  data: null,
  error: null,
};

const CarouselReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CAROUSEL_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionTypes.GET_CAROUSEL_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionTypes.GET_CAROUSEL_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default CarouselReducer;
