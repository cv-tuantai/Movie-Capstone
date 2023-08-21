import * as ActionTypes from "../constants/CheckoutConstant";
import api from "../../util/api";

export const actCheckout = (maLichChieu) => {
  return (dispatch) => {
    dispatch(actCheckoutRequest());

    api
      .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
      .then((result) => {
        console.log(result);
        if (result.data.statusCode === 200) {
          dispatch(actCheckoutSuccess(result.data.content));
        }
      })
      .catch((error) => dispatch(actCheckoutFail(error)));
  };
};

const actCheckoutRequest = () => {
  return {
    type: ActionTypes.CHECKOUT_REQUEST,
  };
};

const actCheckoutSuccess = (data) => {
  return {
    type: ActionTypes.CHECKOUT_SUCCESS,
    payload: data,
  };
};

const actCheckoutFail = (error) => {
  return {
    type: ActionTypes.CHECKOUT_FAIL,
    payload: error,
  };
};

export const actSelectedSeats = (data) => {
  return {
    type: ActionTypes.SELECTED_SEATS,
    payload: data,
  };
};

export const actCompleteCheckout = () => {
  return {
    type: ActionTypes.COMPLETE_CHECKOUT,
  };
};
