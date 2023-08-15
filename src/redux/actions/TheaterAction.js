import * as ActionTypes from "../constants/TheaterConstant";
import api from "../../util/api";

export const actGetTheater = () => {
  return (dispatch) => {
    dispatch(actGetTheaterRequest());

    api
      .get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03")
      .then((result) => {
        console.log(result);
        if (result.data.statusCode === 200) {
          dispatch(actGetTheaterSuccess(result.data.content));
        }
      })
      .catch((error) => dispatch(actGetTheaterFail(error)));
  };
};

const actGetTheaterRequest = () => {
  return {
    type: ActionTypes.THEATER_REQUEST,
  };
};

const actGetTheaterSuccess = (data) => {
  return {
    type: ActionTypes.THEATER_SUCCESS,
    payload: data,
  };
};

const actGetTheaterFail = (error) => {
  return {
    type: ActionTypes.THEATER_FAIL,
    payload: error,
  };
};
