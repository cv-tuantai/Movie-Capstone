import React, { Fragment, useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  actCheckout,
  actSelectedSeats,
} from "../../../redux/actions/CheckoutAction";
import { actBookingInfo } from "../../../redux/actions/BookingInfoAction";
import { useParams } from "react-router-dom";
import { CheckOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";
import { Tabs } from "antd";

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

      const taiKhoan = JSON.parse(localStorage.getItem("user")).taiKhoan;
      const gheMinhDat = taiKhoan === ghe.taiKhoanNguoiDat ? "gheMinhDat" : "";

      return (
        <Fragment key={ghe.tenGhe}>
          <button
            onClick={() => {
              dispatch(actSelectedSeats(ghe));
            }}
            disabled={ghe.daDat}
            className={`ghe ${gheVip} ${gheDaDat} ${gheDangDat} ${gheMinhDat}`}
          >
            {ghe.daDat ? (
              gheMinhDat !== "" ? (
                <UserOutlined />
              ) : (
                <CloseOutlined />
              )
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
              <h3 className="text-center mt-1 text-lg">Màn hình</h3>
              <div className="screen justify-center mb-8"></div>
              {renderSeats()}
              <div className="flex justify-between">
                <div className="flex items-center">
                  <span>Ghế chưa đặt</span>
                  <button className="ghe">
                    <CheckOutlined />
                  </button>
                </div>
                <div className="flex items-center">
                  <span>Ghế đã đặt</span>
                  <button className="ghe gheDaDat">
                    <CloseOutlined />
                  </button>
                </div>
                <div className="flex items-center">
                  <span>Ghế vip</span>
                  <button className="ghe gheVip">
                    <CheckOutlined />
                  </button>
                </div>
                <div className="flex items-center">
                  <span>Ghế đang đặt</span>
                  <button className="ghe gheDangDat">
                    <CheckOutlined />
                  </button>
                </div>
                <div className="flex items-center">
                  <span>Ghế bạn đã đặt</span>
                  <button className="ghe gheMinhDat">
                    <UserOutlined />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Booking info */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl text-center font-semibold mb-6">
                Thông tin đặt vé
              </h2>
              <div className="flex justify-between my-4">
                <span>Cụm Rạp:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.tenCumRap}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4">
                <span>Địa chỉ:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.diaChi}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4">
                <span>Rạp:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.tenRap}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4">
                <span>Ngày giờ chiếu:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.ngayChieu} - {data?.thongTinPhim.gioChieu}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4">
                <span>Tên Phim:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.tenPhim}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4">
                <span>Ghế:</span>
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
                <span className="font-semibold">Tổng tiền</span>
                <span className="font-semibold text-green-600">
                  {selectedSeats
                    ?.reduce((total, seat) => {
                      return (total += seat.giaVe);
                    }, 0)
                    .toLocaleString()}{" "}
                  VNĐ
                </span>
              </div>
              <button
                onClick={() => {
                  const bookingInfo = {
                    maLichChieu: id,
                    danhSachVe: selectedSeats,
                  };
                  dispatch(actBookingInfo(bookingInfo));
                }}
                className="bg-red-700 hover:bg-red-500 duration-300 text-white text-2xl py-2 px-4 rounded-lg mt-4 w-full"
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
