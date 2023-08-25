import * as ActionTypes from "../constants/DeleteFilmConstant";
import api from "../../util/api";
import { actListMovie } from "./ListMovieAction";

export const actDeleteFilm = (maPhim) => {
  return (dispatch) => {
    dispatch(actDeleteFilmRequest());

    api
      .delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
      .then((result) => {
        console.log(result);
        if (result.data.statusCode === 200) {
          dispatch(actDeleteFilmSuccess(result.data.content));
          alert("Xóa phim thành công!");
          dispatch(actListMovie());
        }
      })
      .catch((error) => dispatch(actDeleteFilmFail(error)));
  };
};

const actDeleteFilmRequest = () => {
  return {
    type: ActionTypes.DELETE_FILM_REQUEST,
  };
};

const actDeleteFilmSuccess = (data) => {
  return {
    type: ActionTypes.DELETE_FILM_SUCCESS,
    payload: data,
  };
};

const actDeleteFilmFail = (error) => {
  return {
    type: ActionTypes.DELETE_FILM_FAIL,
    payload: error,
  };
};
