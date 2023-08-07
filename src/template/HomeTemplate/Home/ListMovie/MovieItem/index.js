import React from "react";
import { Button } from "antd";
import "./style.css";

export default function MovieItem(props) {
  const { movie } = props;

  return (
    <div className="p-2 lg:w-1/4 ">
      <div className="h-full bg-gray-100 bg-opacity-75 px-2 pt-2 pb-5 rounded-lg overflow-hidden text-center relative card-container">
        <img
          src={movie.hinhAnh}
          alt={movie.tenPhim}
          style={{
            height: "400px",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
        <div className="card-overlay">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 mt-3">
            {movie.tenPhim}
          </h1>
          <p className="leading-relaxed mb-3">
            {movie.moTa.length > 70
              ? `${movie.moTa.slice(0, 70)}...`
              : movie.moTa}
          </p>
          <div className="button-container">
            <Button danger className="text-xl font-medium mr-5" size="large">
              CHI TIẾT
            </Button>
            <Button
              type="primary"
              danger
              className="text-xl font-medium"
              size="large"
            >
              ĐẶT VÉ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
