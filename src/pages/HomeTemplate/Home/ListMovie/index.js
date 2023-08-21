import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actListMovie } from "../../../../redux/actions/ListMovieAction";
import MovieItem from "./MovieItem";
import Loader from "../../../../components/Loader";

export default function ListMovie() {
  const { data, loading } = useSelector((state) => state.ListMovieReducer);
  const dispatch = useDispatch();

  const [mode, setMode] = useState("showing");

  useEffect(() => {
    dispatch(actListMovie());
  }, []);

  const renderListMovie = () => {
    if (loading) return <Loader />;

    const movieToShow = data?.filter(
      (movie) =>
        (mode === "showing" && movie.dangChieu) ||
        (mode === "upcoming" && movie.sapChieu),
    );

    return movieToShow
      ?.slice(0, 8)
      .map((movie) => <MovieItem key={movie.maPhim} movie={movie} />);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container xl:px-28 px-5 py-12 mx-auto">
        <button
          type="button"
          className={`px-8 py-3 font-semibold border rounded mr-3 ${
            mode === "showing"
              ? "bg-gray-800 text-white hover:bg-gray-600"
              : "bg-white text-gray-800 border-gray-800 hover:bg-slate-200"
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
              ? "bg-gray-800 text-white hover:bg-gray-600"
              : "bg-white text-gray-800 border-gray-800 hover:bg-slate-200"
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
