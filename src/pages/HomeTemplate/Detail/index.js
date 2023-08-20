import React, { useEffect } from "react";
import "./style.css";
import "./circle.css";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actDetailMovie } from "../../../redux/actions/DetailMovieAction";
import moment from "moment";
import { Rate, Tabs } from "antd";

export default function Detail() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.DetailMovieReducer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actDetailMovie(id));
  }, []);

  const renderTheater = () => {
    return (
      <Tabs
        className="container mx-auto xl:px-52 pb-10 mt-10"
        tabPosition="left"
        items={data.heThongRapChieu?.map((theater, index) => {
          return {
            label: (
              <div className="flex items-center">
                <img
                  className="rounded-full mr-2"
                  width={50}
                  src={theater.logo}
                  alt={index}
                />
                <p className="text-green-700">{theater.tenHeThongRap}</p>
              </div>
            ),
            key: index,
            children: theater.cumRapChieu?.map((cum, index) => {
              return (
                <div className="flex items-center mb-2" key={index}>
                  <img
                    className="mr-2"
                    src={cum.hinhAnh}
                    alt={index}
                    style={{
                      width: "100px",
                      height: "130px",
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />
                  <div>
                    <p className="text-lg text-red-600">{cum.tenCumRap}</p>
                    <p className="text-gray-500">{cum.diaChi}</p>
                    <div className="grid grid-cols-4 gap-1">
                      {cum.lichChieuPhim?.slice(0, 8).map((lich) => {
                        return (
                          <Link
                            to={`/checkout/${lich.maLichChieu}`}
                            className="p-2 font-semibold rounded-md border border-slate-200 text-red-600"
                            key={lich.maLichChieu}
                          >
                            {moment(lich.ngayChieuGioChieu).format("hh:mm A")}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }),
          };
        })}
      />
    );
  };

  if (loading) return <div>Loading...</div>;
  if (data) {
    return (
      <>
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
                  <div className="px-10 col-span-2">
                    <h2 className="text-white text-2xl">{data.tenPhim}</h2>
                    <p className="text-white mt-5">
                      {data.moTa.length > 300
                        ? `${data.moTa.slice(0, 300)}...`
                        : data.moTa}
                    </p>
                    <p className="text-white mt-3">
                      Ngày chiếu:{" "}
                      {moment(data.ngayKhoiChieu).format("MM-DD-YYYY")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className={`c100 p${data.danhGia * 10} big`}>
                  <span className="text-white">{data.danhGia * 10}%</span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                  <Rate
                    className="text-center"
                    style={{ marginLeft: "15%" }}
                    allowHalf
                    value={data.danhGia / 2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {renderTheater()}
      </>
    );
  }
}
