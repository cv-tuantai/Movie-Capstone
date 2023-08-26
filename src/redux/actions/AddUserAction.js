import * as ActionTypes from "../constants/AddUserConstant";
import api from "../../util/api";

export const actAddUser = (user, navigate) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());

    api
      .post("QuanLyNguoiDung/ThemNguoiDung", user)
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actAddUserSuccess(result.data.content));
          alert("Thêm người dùng thành công!");
          navigate("/admin/users", { replace: true });
        }
      })
      .catch((error) => dispatch(actAddUserFail(error)));
  };
};

const actAddUserRequest = () => {
  return {
    type: ActionTypes.ADD_USER_REQUEST,
  };
};

const actAddUserSuccess = (data) => {
  return {
    type: ActionTypes.ADD_USER_SUCCESS,
    payload: data,
  };
};

const actAddUserFail = (error) => {
  return {
    type: ActionTypes.ADD_USER_FAIL,
    payload: error,
  };
};
