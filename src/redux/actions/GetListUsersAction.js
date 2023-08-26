import * as ActionTypes from "../constants/GetListUsersConstant";
import api from "../../util/api";

export const actGetListUsers = () => {
  return (dispatch) => {
    dispatch(actGetListUsersRequest());

    api
      .get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actGetListUsersSuccess(result.data.content));
        }
      })
      .catch((error) => dispatch(actGetListUsersFail(error)));
  };
};

const actGetListUsersRequest = () => {
  return {
    type: ActionTypes.GET_LIST_USER_REQUEST,
  };
};

const actGetListUsersSuccess = (data) => {
  return {
    type: ActionTypes.GET_LIST_USER_SUCCESS,
    payload: data,
  };
};

const actGetListUsersFail = (error) => {
  return {
    type: ActionTypes.GET_LIST_USER_FAIL,
    payload: error,
  };
};
