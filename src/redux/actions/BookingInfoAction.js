import api from "../../util/api";
import * as ActionTypes from "../constants/BookingInfoConstant";

export const actBookingInfo = (bookingInfo) => {
  return (dispatch) => {
    dispatch(actBookingInfoRequest());

    api
      .post("QuanLyDatVe/DatVe", bookingInfo)
      .then((result) => {
        console.log(result);
        dispatch(actBookingInfoSuccess(bookingInfo));
      })
      .catch((error) => {
        console.log(error);
        dispatch(actBookingInfoFail(error));
      });
  };
};

const actBookingInfoRequest = () => {
  return {
    type: ActionTypes.BOOKING_INFO_REQUEST,
  };
};

const actBookingInfoSuccess = (data) => {
  return {
    type: ActionTypes.BOOKING_INFO_SUCCESS,
    payload: data,
  };
};

const actBookingInfoFail = (error) => {
  return {
    type: ActionTypes.BOOKING_INFO_FAIL,
    payload: error,
  };
};
