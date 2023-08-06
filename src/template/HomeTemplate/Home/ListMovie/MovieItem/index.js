import React from "react";

export default function MovieItem(props) {
  const { movie } = props;

  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-gray-100 bg-opacity-75 px-5 pt-5 pb-5 rounded-lg overflow-hidden text-center relative">
        <img src={movie.hinhAnh} alt={movie.tenPhim} />
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {movie.tenPhim}
        </h1>
        <p className="leading-relaxed mb-3">
          {movie.moTa.length > 200
            ? `${movie.moTa.slice(0, 200)}...`
            : movie.moTa}
        </p>
        <a className="text-indigo-500 inline-flex items-center">
          Đặt vé
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
