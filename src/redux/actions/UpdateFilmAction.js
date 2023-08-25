import * as ActionTypes from "../constants/UpdateFilmConstant";
import api from "../../util/api";

export const actUpdateFilm = (formData) => {
  return (dispatch) => {
    dispatch(actUpdateFilmRequest());

    api
      .post("QuanLyPhim/CapNhatPhimUpload", formData)
      .then((result) => {
        console.log(result);
        if (result.data.statusCode === 200) {
          dispatch(actUpdateFilmSuccess(result.data.content));
          alert("Cập nhật phim thành công!");
        }
      })
      .catch((error) => dispatch(actUpdateFilmFail(error)));
  };
};

const actUpdateFilmRequest = () => {
  return {
    type: ActionTypes.UPDATE_FILM_REQUEST,
  };
};

const actUpdateFilmSuccess = (data) => {
  return {
    type: ActionTypes.UPDATE_FILM_SUCCESS,
    payload: data,
  };
};

const actUpdateFilmFail = (error) => {
  return {
    type: ActionTypes.UPDATE_FILM_FAIL,
    payload: error,
  };
};
