import React, { Fragment, useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  actCheckout,
  actSelectedSeats,
} from "../../../redux/actions/CheckoutAction";
import { useParams } from "react-router-dom";
import { StopOutlined } from "@ant-design/icons";

export default function Checkout() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, data, selectedSeats } = useSelector(
    (state) => state.CheckoutReducer,
  );

  useEffect(() => {
    dispatch(actCheckout(id));
  }, []);

  if (loading) return <div>Loading...</div>;

  const renderSeats = () => {
    return data?.danhSachGhe.map((ghe) => {
      const gheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      const gheDaDat = ghe.daDat === true ? "gheDaDat" : "";

      const indexGheDangDat = selectedSeats.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe,
      );
      const gheDangDat = indexGheDangDat !== -1 ? "gheDangDat" : "";

      return (
        <Fragment key={ghe.tenGhe}>
          <button
            onClick={() => {
              dispatch(actSelectedSeats(ghe));
            }}
            disabled={ghe.daDat}
            className={`ghe ${gheVip} ${gheDaDat} ${gheDangDat}`}
          >
            {ghe.daDat === true ? (
              <StopOutlined style={{ lineHeight: "35px" }} />
            ) : (
              ghe.tenGhe
            )}
          </button>
          {ghe.tenGhe % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="bg-gray-100 h-screen py-3">
      <div>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Chose seat */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <h3 className="text-center mt-1 text-lg">Screen</h3>
              <div className="screen justify-center mb-8"></div>
              {renderSeats()}
            </div>
          </div>

          {/* Booking info */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl text-center font-semibold mb-6">
                Booking info
              </h2>
              <div className="flex justify-between my-4">
                <span>Cinema Complex:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.tenCumRap}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4">
                <span>Address:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.diaChi}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4">
                <span>Theater:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.tenRap}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4">
                <span>Showtime:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.ngayChieu} - {data?.thongTinPhim.gioChieu}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4">
                <span>Movie Title:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.tenPhim}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4">
                <span>Selected Seats:</span>
                <span className="text-green-600 font-semibold">
                  {selectedSeats
                    ?.slice() //clone mảng
                    .sort((a, b) => a.stt - b.stt) //sort theo thứ tự
                    .map((gheDangDat, index, arr) => {
                      return (
                        // index và arr để kiểm tra ghế cuối, nếu chưa phải ghế cuối thì thêm dấu phẩy
                        <Fragment key={gheDangDat.stt}>
                          {gheDangDat.stt}
                          {index < arr.length - 1 ? ", " : ""}
                        </Fragment>
                      );
                    })}
                </span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between my-5 text-xl">
                <span className="font-semibold">Total</span>
                <span className="font-semibold text-green-600">
                  {selectedSeats
                    ?.reduce((total, seat) => {
                      return (total += seat.giaVe);
                    }, 0)
                    .toLocaleString()}{" "}
                  VND
                </span>
              </div>
              <button className="bg-red-700 hover:bg-red-500 duration-300 text-white text-2xl py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
