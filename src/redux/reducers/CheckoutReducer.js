import * as ActionTypes from "../constants/CheckoutConstant";

const initalState = {
  loading: false,
  data: null,
  error: null,
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

    default:
      return { ...state };
  }
};

export default CheckoutReducer;
