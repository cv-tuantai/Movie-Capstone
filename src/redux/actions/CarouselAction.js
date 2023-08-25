import * as ActionTypes from "../constants/CarouselConstant";
import api from "../../util/api";

export const actGetCarousel = () => {
  return (dispatch) => {
    dispatch(actGetCarouselRequest());

    api
      .get("QuanLyPhim/LayDanhSachBanner")
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actGetCarouselSuccess(result.data.content));
        }
      })
      .catch((error) => dispatch(actGetCarouselFail(error)));
  };
};

const actGetCarouselRequest = () => {
  return {
    type: ActionTypes.GET_CAROUSEL_REQUEST,
  };
};

const actGetCarouselSuccess = (data) => {
  return {
    type: ActionTypes.GET_CAROUSEL_SUCCESS,
    payload: data,
  };
};

const actGetCarouselFail = (error) => {
  return {
    type: ActionTypes.GET_CAROUSEL_FAIL,
    payload: error,
  };
};
