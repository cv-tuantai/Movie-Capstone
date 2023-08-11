import * as ActionTypes from "../constants/DetailMovieConstants";
import api from "../../util/api";

export const actDetailMovie = (id) => {
  return (dispatch) => {
    dispatch(actDetailMovieRequest());

    api
      .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
      .then((result) => {
        console.log(result);
        if (result.data.statusCode === 200) {
          dispatch(actDetailMovieSuccess(result.data.content));
        }
      })
      .catch((error) => dispatch(actDetailMovieFail(error)));
  };
};

const actDetailMovieRequest = () => {
  return {
    type: ActionTypes.DETAIL_MOVIE_REQUEST,
  };
};

const actDetailMovieSuccess = (data) => {
  return {
    type: ActionTypes.DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};

const actDetailMovieFail = (error) => {
  return {
    type: ActionTypes.DETAIL_MOVIE_FAIL,
    payload: error,
  };
};
