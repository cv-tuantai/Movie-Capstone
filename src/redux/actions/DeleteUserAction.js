import * as actionTypes from "../constants/DeleteUserConstant";
import api from "../../util/api";
import { actGetListUsers } from "./GetListUsersAction";

export const actDeleteUser = (taiKhoan) => {
  return (dispatch) => {
    dispatch(actDeleteUserRequest());

    api
      .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actDeleteUserSuccess(result.data.content));
          alert("Xóa người dùng thành công!");
          dispatch(actGetListUsers());
        }
      })
      .catch((error) => dispatch(actDeleteUserFail(error)));
  };
};

const actDeleteUserRequest = () => {
  return {
    type: actionTypes.DELETE_USER_REQUEST,
  };
};

const actDeleteUserSuccess = (data) => {
  return {
    type: actionTypes.DELETE_USER_SUCCESS,
    payload: data,
  };
};

const actDeleteUserFail = (error) => {
  return {
    type: actionTypes.DELETE_USER_FAIL,
    payload: error,
  };
};
