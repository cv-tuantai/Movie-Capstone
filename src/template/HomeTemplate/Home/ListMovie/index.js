import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actListMovie } from "../../../../redux/actions/ListMovieAction";
import MovieItem from "./MovieItem";

export default function ListMovie() {
  const data = useSelector((state) => state.ListMovieReducer.data);
  const loading = useSelector((state) => state.ListMovieReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actListMovie());
  }, []);

  const renderListMovie = () => {
    if (loading) return <div>Loading...</div>;
    return data?.map((movie) => {
      return <MovieItem key={movie.maPhim} />;
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">{renderListMovie()}</div>
      </div>
    </section>
  );
}
