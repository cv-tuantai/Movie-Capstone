import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { actTryLogout } from "../../../redux/actions/LoginAction";

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //logout sau khi hết expire dù refresh trang
  useEffect(() => {
    dispatch(actTryLogout(navigate));
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="h-full">
      <div className="border-b-2 block md:flex">
        <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <div className="text-center">
            <span className="text-xl font-semibold block">
              Thông tin tài khoản
            </span>
            <span className="text-gray-600">
              Hãy giữ bí mật thông tin tài khoản của bạn
            </span>
          </div>
          <div className="w-full p-8 mx-2 flex justify-center">
            <img
              id="showImage"
              width={300}
              height={300}
              className="items-center border rounded-full"
              src="https://picsum.photos/300/300"
              alt="123"
            />
          </div>
          <div className="text-center mt-3">
            <Link
              to="/admin"
              className="text-md font-semibold text-white bg-gray-700 rounded-full px-5 py-3 hover:bg-gray-800"
            >
              Đến trang quản trị
            </Link>
            <Link
              to="/"
              className="text-md ml-3 font-semibold text-white bg-green-600 rounded-full px-5 py-3 hover:bg-green-700"
            >
              Quay lại trang chủ
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
          <div className="rounded  shadow p-6">
            <div className="pb-6">
              <label className="font-semibold text-gray-700 block pb-1">
                Tên
              </label>
              <div className="flex">
                <input
                  disabled
                  className="border-1  rounded-r px-4 py-2 w-full"
                  type="text"
                  defaultValue={user.hoTen}
                />
              </div>
            </div>
            <div className="pb-6">
              <label className="font-semibold text-gray-700 block pb-1">
                Email
              </label>
              <input
                disabled
                className="border-1  rounded-r px-4 py-2 w-full"
                type="email"
                defaultValue={user.email}
              />
            </div>
            <div className="pb-6">
              <label className="font-semibold text-gray-700 block pb-1">
                Số điện thoại
              </label>
              <div className="flex">
                <input
                  disabled
                  className="border-1  rounded-r px-4 py-2 w-full"
                  type="text"
                  defaultValue={user.soDT}
                />
              </div>
            </div>
            <div className="pb-6">
              <label className="font-semibold text-gray-700 block pb-1">
                Tài khoản
              </label>
              <div className="flex">
                <input
                  disabled
                  className="border-1  rounded-r px-4 py-2 w-full"
                  type="text"
                  defaultValue={user.taiKhoan}
                />
              </div>
            </div>
            <div className="pb-6">
              <label className="font-semibold text-gray-700 block pb-1">
                Loại tài khoản
              </label>
              <div className="flex">
                <input
                  disabled
                  className="border-1  rounded-r px-4 py-2 w-full"
                  type="text"
                  defaultValue={user.maLoaiNguoiDung}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
