import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { actAddUser } from "../../../../redux/actions/AddUserAction";

const AddUser = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      maLoaiNguoiDung: "KhachHang",
      maNhom: "GP01",
    },
    onSubmit: (values) => {
      dispatch(actAddUser(values));
    },
  });

  return (
    <div className="container px-52">
      <h2 className="text-center text-3xl mb-5">Thêm người dùng</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex -mx-3">
          <div className="w-1/2 px-3 mb-5">
            <label className="text-xs font-semibold px-1">Họ tên</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-account-outline text-gray-400 text-lg" />
              </div>
              <input
                type="text"
                className="w-full -ml-10 px-5 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="Họ tên người dùng"
                name="hoTen"
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="w-1/2 px-3 mb-5">
            <label className="text-xs font-semibold px-1">Số điện thoại</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-account-outline text-gray-400 text-lg" />
              </div>
              <input
                type="text"
                className="w-full -ml-10 px-5 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="SĐT"
                name="soDt"
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-1/2 px-3 mb-5">
            <label className="text-xs font-semibold px-1">Tài khoản</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg" />
              </div>
              <input
                type="text"
                className="w-full -ml-10 px-5 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="johnsmith123"
                name="taiKhoan"
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="w-1/2 px-3 mb-5">
            <label className="text-xs font-semibold px-1">Mật khẩu</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
              </div>
              <input
                type="password"
                className="w-full -ml-10 px-5 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="************"
                name="matKhau"
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>

        <div className="flex -mx-3">
          <div className="w-1/2 px-3 mb-12">
            <label className="text-xs font-semibold px-1">Email</label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg" />
              </div>
              <input
                type="email"
                className="w-full -ml-10 px-5 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="johnsmith@example.com"
                name="email"
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="w-1/2 px-3 mb-12">
            <div>
              <label
                htmlFor="countries"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Loại người dùng
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={formik.handleChange}
                name="maLoaiNguoiDung"
              >
                <option value="KhachHang">Khách hàng</option>
                <option value="QuanTri">Quản trị</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-1/2 px-3 mb-5">
            <button
              type="submit"
              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              THÊM NGƯỜI DÙNG
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddUser;
