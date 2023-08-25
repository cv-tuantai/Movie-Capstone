import * as ActionTypes from "../constants/GetInfoFilmConstant";
import api from "../../util/api";

export const actGetInfoFilm = (maPhim) => {
  return (dispatch) => {
    dispatch(actGetInfoFilmRequest());

    api
      .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
      .then((result) => {
        console.log(result);
        if (result.data.statusCode === 200) {
          dispatch(actGetInfoFilmSuccess(result.data.content));
        }
      })
      .catch((error) => dispatch(actGetInfoFilmFail(error)));
  };
};

const actGetInfoFilmRequest = () => {
  return {
    type: ActionTypes.GET_INFO_FILM_REQUEST,
  };
};

const actGetInfoFilmSuccess = (data) => {
  return {
    type: ActionTypes.GET_INFO_FILM_SUCCESS,
    payload: data,
  };
};

const actGetInfoFilmFail = (error) => {
  return {
    type: ActionTypes.GET_INFO_FILM_FAIL,
    payload: error,
  };
};
