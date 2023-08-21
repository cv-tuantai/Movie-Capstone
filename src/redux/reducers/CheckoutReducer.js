import * as ActionTypes from "../constants/CheckoutConstant";

const initalState = {
  loading: false,
  data: null,
  error: null,
  selectedSeats: [],
};

const CheckoutReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.CHECKOUT_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionTypes.CHECKOUT_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionTypes.CHECKOUT_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    case ActionTypes.SELECTED_SEATS:
      let selectedSeatsClone = [...state.selectedSeats];

      const index = selectedSeatsClone.findIndex(
        (selectedSeat) => selectedSeat.maGhe === action.payload.maGhe,
      );

      if (index !== -1) {
        selectedSeatsClone.splice(index, 1);
      } else {
        selectedSeatsClone.push(action.payload);
      }

      state.selectedSeats = selectedSeatsClone;
      return { ...state };

    case ActionTypes.COMPLETE_CHECKOUT:
      state.selectedSeats = [];
      return { ...state };

    default:
      return { ...state };
  }
};

export default CheckoutReducer;
