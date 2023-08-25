import * as ActionTypes from "../constants/ListMovieConstant";
import api from "../../util/api";

export const actListMovie = (tenPhim = "") => {
  return (dispatch) => {
    dispatch(actListMovieRequest());

    const url = tenPhim
      ? `QuanLyPhim/LayDanhSachPhim?maNhom=GP09&tenphim=${tenPhim}`
      : "QuanLyPhim/LayDanhSachPhim?maNhom=GP09";

    api
      .get(url)
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actListMovieSuccess(result.data.content));
        }
      })
      .catch((error) => dispatch(actListMovieFail(error)));
  };
};

const actListMovieRequest = () => {
  return {
    type: ActionTypes.LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: ActionTypes.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFail = (error) => {
  return {
    type: ActionTypes.LIST_MOVIE_FAIL,
    payload: error,
  };
};
