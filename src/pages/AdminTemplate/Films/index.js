import React, { useEffect } from "react";
import { Table, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { actListMovie } from "../../../redux/actions/ListMovieAction";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { actDeleteFilm } from "../../../redux/actions/DeleteFilmAction";

export default function Films() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.ListMovieReducer);

  useEffect(() => {
    dispatch(actListMovie());
  }, []);

  if (loading) return <Loader />;

  const { Search } = Input;
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
        <img src={film.hinhAnh} alt={film.maPhim} width={200} />
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
      dataIndex: "maPhim",
      render: (text, film) => {
        return (
          <>
            <Link
              to={`/admin/edit-film/${film.maPhim}`}
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
                  window.confirm("Bạn có chắc là muốn xóa phim " + film.tenPhim)
                ) {
                  dispatch(actDeleteFilm(film.maPhim));
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

  const onSearch = (value) => dispatch(actListMovie(value));

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">Quản lý phim</h2>
      <Link to="/admin/add-film">
        <Button type="primary" danger className="my-3">
          Thêm phim
        </Button>
      </Link>
      <Search
        placeholder="Nhập tên phim để tìm kiếm"
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
        rowKey={"maPhim"}
      />
    </div>
  );
}
