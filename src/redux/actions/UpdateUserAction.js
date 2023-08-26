import * as ActionTypes from "../constants/UpdateUserConstant";
import api from "../../util/api";

export const actUpdateUser = (user, navigate) => {
  return (dispatch) => {
    dispatch(actUpdateUserRequest());

    api
      .post("QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actUpdateUserSuccess(result.data.content));
          alert("Cập nhật thành công!");
          navigate("/admin/users", { replace: true });
        }
      })
      .catch((error) => dispatch(actUpdateUserFail(error)));
  };
};

const actUpdateUserRequest = () => {
  return {
    type: ActionTypes.UPDATE_USER_REQUEST,
  };
};

const actUpdateUserSuccess = (data) => {
  return {
    type: ActionTypes.UPDATE_USER_SUCCESS,
    payload: data,
  };
};

const actUpdateUserFail = (error) => {
  return {
    type: ActionTypes.UPDATE_USER_FAIL,
    payload: error,
  };
};
