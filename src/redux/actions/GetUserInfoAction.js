import * as ActionTypes from "../constants/GetUserInfoConstant";
import api from "../../util/api";

export const actGetUserInfo = (taiKhoan) => {
  return (dispatch) => {
    dispatch(actGetUserInfoRequest());

    api
      .post(`QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actGetUserInfoSuccess(result.data.content));
        }
      })
      .catch((error) => dispatch(actGetUserInfoFail(error)));
  };
};

const actGetUserInfoRequest = () => {
  return {
    type: ActionTypes.GET_USER_INFO_REQUEST,
  };
};

const actGetUserInfoSuccess = (data) => {
  return {
    type: ActionTypes.GET_USER_INFO_SUCCESS,
    payload: data,
  };
};

const actGetUserInfoFail = (error) => {
  return {
    type: ActionTypes.GET_USER_INFO_FAIL,
    payload: error,
  };
};
