import * as ActionTypes from "../constants/ListMovieConstant";
import api from "../../util/api";

export const actListMovie = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());

    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP03")
      .then((result) => {
        console.log(result);
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
