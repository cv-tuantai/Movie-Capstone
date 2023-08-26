import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PlayCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { actLogout } from "../../../redux/actions/LoginAction";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="/admin">Quản lý phim</Link>, "1", <PlayCircleOutlined />),
  getItem(
    <Link to="/admin/users">Quản lý users</Link>,
    "2",
    <PlusCircleOutlined />,
  ),
];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Bạn cần phải đăng nhập trước.");
    return <Navigate replace to="/login" />;
  }

  if (user.maLoaiNguoiDung !== "QuanTri") {
    alert('Bạn không có quyền "Quản Trị" để truy cập trang này.');
    return <Navigate replace to="/" />;
  }

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Link to="/" className="logo p-5 flex items-center">
          <img
            src="https://i.imgur.com/lC22izJ.png"
            className="h-6 sm:h-9"
            alt="Cybersoft Logo"
          />
          <span
            className={`text-xl font-semibold text-white ml-3 ${
              collapsed ? "hidden" : ""
            }`}
          >
            Cybersoft
          </span>
        </Link>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header className="bg-slate-300 text-right dark">
          <Link
            to="/profile"
            className="text-gray-800 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            {`Xin chào ${user.taiKhoan}`}
          </Link>
          <button
            onClick={() => {
              dispatch(actLogout(navigate));
            }}
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Đăng xuất
          </button>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer className="text-center">
          Cybersoft ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
