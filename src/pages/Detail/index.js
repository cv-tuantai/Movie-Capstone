import React, { useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actDetailMovie } from "../../redux/actions/DetailMovieAction";

export default function Detail() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.DetailMovieReducer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actDetailMovie(id));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (data) {
    return (
      <div
        style={{
          backgroundImage: `url(${data.hinhAnh})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="upper-layer">
          <div className="grid grid-cols-12 pt-28">
            <div className="col-start-3 col-span-6">
              <div className="grid grid-cols-3">
                <img
                  src={data.hinhAnh}
                  alt="123"
                  style={{
                    height: "350px",
                    width: "300px",
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />
                <div className="ml-10">
                  <h2 className="text-white text-2xl">{data.tenPhim}</h2>
                  <p className="text-white mt-5">
                    {data.moTa.length > 200
                      ? `${data.moTa.slice(0, 200)}...`
                      : data.moTa}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="flex items-center mb-2">
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ml-2 text-sm font-medium text-white">
                  4.95 out of 5
                </p>
              </div>
              <p className="text-sm font-medium text-white">
                1,745 global ratings
              </p>
              <div className="flex items-center mt-4">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  5 star
                </div>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: "70%" }}
                  />
                </div>
                <span className="text-sm font-medium text-yellow-300">70%</span>
              </div>
              <div className="flex items-center mt-4">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  4 star
                </div>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: "17%" }}
                  />
                </div>
                <span className="text-sm font-medium text-yellow-300">17%</span>
              </div>
              <div className="flex items-center mt-4">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  3 star
                </div>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: "8%" }}
                  />
                </div>
                <span className="text-sm font-medium text-yellow-300">8%</span>
              </div>
              <div className="flex items-center mt-4">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  2 star
                </div>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: "4%" }}
                  />
                </div>
                <span className="text-sm font-medium text-yellow-300">4%</span>
              </div>
              <div className="flex items-center mt-4">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  1 star
                </div>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-yellow-300 rounded"
                    style={{ width: "1%" }}
                  />
                </div>
                <span className="text-sm font-medium text-yellow-300">1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
