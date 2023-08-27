import React, { useEffect } from "react";
import { Table, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { actGetListUsers } from "../../../redux/actions/GetListUsersAction";
import { actDeleteUser } from "../../../redux/actions/DeleteUserAction";

export default function Users() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.GetListUsersReducer);

  useEffect(() => {
    dispatch(actGetListUsers());
  }, []);

  if (loading) return <Loader />;

  const { Search } = Input;
  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      width: "20%",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      width: "20%",
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",
      render: (text, user) => {
        return (
          <>
            <Link
              to={`/admin/edit-user/${user.taiKhoan}`}
              key={1}
              className=" mr-2 text-2xl"
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </Link>
            <span
              key={2}
              style={{ cursor: "pointer" }}
              className="text-2xl"
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc là muốn xóa người dùng " + user.taiKhoan,
                  )
                ) {
                  dispatch(actDeleteUser(user.taiKhoan));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </span>
          </>
        );
      },
      width: "10%",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value) => dispatch(actGetListUsers(value));

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">Quản lý người dùng</h2>
      <Link to="/admin/add-user">
        <Button type="primary" danger className="my-3">
          Thêm người dùng
        </Button>
      </Link>
      <Search
        placeholder="Nhập tên người dùng để tìm kiếm"
        allowClear
        onSearch={onSearch}
        style={{
          width: "100%",
          marginBottom: "20px",
        }}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"taiKhoan"}
      />
    </div>
  );
}
