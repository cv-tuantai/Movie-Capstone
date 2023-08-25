import * as ActionTypes from "../constants/RegisterConstants";
import api from "../../util/api";

export const actRegister = (user, navigate) => {
  return (dispatch) => {
    dispatch(actRegisterRequest());

    api
      .post("QuanLyNguoiDung/DangKy", user)
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actRegisterSuccess(result.data.content));
          navigate("/login", { replace: true });
        }
      })
      .catch((error) => dispatch(actRegisterFail(error)));
  };
};

const actRegisterRequest = () => {
  return {
    type: ActionTypes.REGISTER_REQUEST,
  };
};

const actRegisterSuccess = (data) => {
  return {
    type: ActionTypes.REGISTER_SUCCESS,
    payload: data,
  };
};

const actRegisterFail = (error) => {
  return {
    type: ActionTypes.REGISTER_FAIL,
    payload: error,
  };
};
