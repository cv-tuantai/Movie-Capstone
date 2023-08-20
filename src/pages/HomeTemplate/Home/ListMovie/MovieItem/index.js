import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function MovieItem(props) {
  const { movie } = props;

  return (
    <div className="p-2 2xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2">
      <div className="bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative card-container">
        <img
          src={movie.hinhAnh}
          alt={movie.tenPhim}
          style={{
            height: "350px",
            width: "300px",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
        <div className="card-overlay">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 mt-3">
            {movie.tenPhim}
          </h1>
          <Link to={`/detail/${movie.maPhim}`}>
            <button
              type="button"
              className="px-10 py-2 font-semibold rounded bg-red-600 text-white hover:bg-red-500 mb-5"
            >
              ĐẶT VÉ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
