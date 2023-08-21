import * as ActionTypes from "../constants/LoginConstants";
import api from "../../util/api";

const TIME_EXPIRE = 60 * 60 * 1000;

export const actLogin = (data, navigate) => {
  return (dispatch) => {
    dispatch(actLoginRequest());

    api
      .post("QuanLyNguoiDung/DangNhap", data)
      .then((result) => {
        if (result.data.statusCode === 200) {
          console.log(result);

          const user = result.data.content;
          dispatch(actLoginSuccess(user));
          localStorage.setItem("user", JSON.stringify(user));

          const time = new Date().getTime();
          const expire = time + TIME_EXPIRE;
          localStorage.setItem("expire", expire);
          dispatch(actTimeoutLogout(navigate, expire));

          // quay lại trang trước đó
          window.history.back();
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(actLoginFail(error));
      });
  };
};

export const actLogout = (navigate) => {
  localStorage.removeItem("user");
  localStorage.removeItem("expire");
  navigate("/login", { replace: true });
  return {
    type: ActionTypes.LOGIN_CLEAR,
  };
};

const actTimeoutLogout = (navigate, expire) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(actLogout(navigate));
    }, expire);
  };
};

export const actTryLogout = (navigate) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    const expire = localStorage.getItem("expire");
    const time = new Date().getTime();
    if (time > expire) {
      dispatch(actLogout(navigate));
      return;
    }
    dispatch(actTimeoutLogout(navigate, time - expire));
    dispatch(actLoginSuccess(user));
  };
};

const actLoginRequest = () => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
  };
};

export const actLoginSuccess = (data) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFail = (error) => {
  return {
    type: ActionTypes.LOGIN_FAIL,
    payload: error,
  };
};
