import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actListMovie } from "../../../../redux/actions/ListMovieAction";
import MovieItem from "./MovieItem";

export default function ListMovie() {
  const data = useSelector((state) => state.ListMovieReducer.data);
  const loading = useSelector((state) => state.ListMovieReducer.loading);
  const dispatch = useDispatch();

  const [mode, setMode] = useState("showing");

  useEffect(() => {
    dispatch(actListMovie());
  }, []);

  const renderListMovie = () => {
    if (loading) return <div>Loading...</div>;

    const movieToShow = data?.filter(
      (movie) =>
        (mode === "showing" && movie.dangChieu) ||
        (mode === "upcoming" && movie.sapChieu),
    );

    return movieToShow?.map((movie) => (
      <MovieItem key={movie.maPhim} movie={movie} />
    ));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <button
          type="button"
          className={`px-8 py-3 font-semibold border rounded mr-3 ${
            mode === "showing"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-800 border-gray-800"
          }  `}
          onClick={() => {
            setMode("showing");
          }}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          type="button"
          className={`px-8 py-3 font-semibold border rounded ${
            mode === "upcoming"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-800 border-gray-800"
          }`}
          onClick={() => {
            setMode("upcoming");
          }}
        >
          PHIM SẮP CHIẾU
        </button>
        <div className="flex flex-wrap -m-4 mt-2">{renderListMovie()}</div>
      </div>
    </section>
  );
}
