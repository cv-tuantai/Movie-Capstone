import * as ActionTypes from "../constants/BookingInfoConstant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const BookingInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.BOOKING_INFO_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionTypes.BOOKING_INFO_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionTypes.BOOKING_INFO_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default BookingInfoReducer;
