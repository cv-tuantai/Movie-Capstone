import React, { useEffect } from "react";
import { Table, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { actListMovie } from "../../../redux/actions/ListMovieAction";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Search } = Input;

export default function Films() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.ListMovieReducer);

  useEffect(() => {
    dispatch(actListMovie());
  }, []);

  if (loading) return <Loader />;

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend"],
      width: "20%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film) => (
        <>
          <img src={film.hinhAnh} alt={film.maPhim} width={200} />
        </>
      ),
      width: "30%",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      width: "40%",
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      render: (text, film) => {
        return (
          <>
            <Link key={1} className=" mr-2 text-2xl" to="/">
              <EditOutlined style={{ color: "blue" }} />{" "}
            </Link>
            <Link key={2} className="text-2xl" to="/">
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </Link>
          </>
        );
      },
      width: "10%",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value) => console.log(value);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">Quản lý phim</h2>
      <Button type="primary" danger className="my-3">
        Thêm phim
      </Button>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{
          width: "100%",
          marginBottom: "20px",
        }}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
