import * as ActionTypes from "../constants/AddFilmConstant";
import api from "../../util/api";

export const actAddFilm = (formData) => {
  return (dispatch) => {
    dispatch(actAddFilmRequest());

    api
      .post("QuanLyPhim/ThemPhimUploadHinh", formData)
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actAddFilmSuccess(result.data.content));
          alert("Thêm phim thành công");
        }
      })
      .catch((error) => dispatch(actAddFilmFail(error)));
  };
};

const actAddFilmRequest = () => {
  return {
    type: ActionTypes.ADD_FILM_REQUEST,
  };
};

const actAddFilmSuccess = (data) => {
  return {
    type: ActionTypes.ADD_FILM_SUCCESS,
    payload: data,
  };
};

const actAddFilmFail = (error) => {
  return {
    type: ActionTypes.ADD_FILM_FAIL,
    payload: error,
  };
};
