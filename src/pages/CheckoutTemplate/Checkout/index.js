import React, { Fragment, useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  actCheckout,
  actCompleteCheckout,
  actSelectedSeats,
} from "../../../redux/actions/CheckoutAction";
import { actBookingInfo } from "../../../redux/actions/BookingInfoAction";
import { useNavigate, useParams } from "react-router-dom";
import { CheckOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";
import { Tabs, Button } from "antd";
import { actGetUserInfo } from "../../../redux/actions/UserInfoAction";
import moment from "moment";
import _ from "lodash";
import Loader from "../../../components/Loader";

function Checkout() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, data, selectedSeats } = useSelector(
    (state) => state.CheckoutReducer,
  );

  useEffect(() => {
    dispatch(actCheckout(id));
  }, []);

  if (loading) return <Loader />;

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
    <div className="bg-gray-100 pt-2">
      <div>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Chose seat */}
          <div className="md:w-2/3">
            <div className="bg-white shadow-md mb-4">
              <h3 className="text-center text-lg">Màn hình</h3>
              <div className="screen justify-center mb-5"></div>
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
            <div className="bg-white shadow-md p-6">
              <h2 className="text-2xl text-center font-semibold mb-6">
                Thông tin đặt vé
              </h2>
              <div className="flex justify-between my-4 text-lg">
                <span>Cụm Rạp:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.tenCumRap}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4 text-lg">
                <span>Địa chỉ:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.diaChi}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4 text-lg">
                <span>Rạp:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.tenRap}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4 text-lg">
                <span>Ngày giờ chiếu:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.ngayChieu} - {data?.thongTinPhim.gioChieu}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4 text-lg">
                <span>Tên Phim:</span>
                <span className="text-green-600 font-semibold">
                  {data?.thongTinPhim.tenPhim}
                </span>
              </div>
              <hr />
              <div className="flex justify-between my-4 text-lg">
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
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const bookingInfo = {
                      maLichChieu: id,
                      danhSachVe: selectedSeats,
                    };
                    dispatch(actBookingInfo(bookingInfo));
                    dispatch(actCheckout(id));
                    dispatch(actCompleteCheckout());
                  }}
                  className=" bg-green-600 hover:bg-green-500 duration-300 text-white text-2xl py-2 px-4 rounded-lg mt-4 w-3/5"
                >
                  Thanh toán
                </button>
                <button
                  onClick={() => {
                    window.history.back();
                    dispatch(actCompleteCheckout());
                  }}
                  className="bg-red-700 hover:bg-red-500 duration-300 text-white text-2xl py-2 px-4 rounded-lg mt-4 w-1/5 ml-3"
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingHistory() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.UserInfoReducer);

  useEffect(() => {
    dispatch(actGetUserInfo());
  }, []);

  if (loading) return <Loader />;

  const renderTicket = () => {
    return data?.thongTinDatVe.map((ticket) => {
      return (
        <div className="p-4 lg:w-1/2" key={ticket.maVe}>
          <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img
              alt="team"
              className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
              src={ticket.hinhAnh}
            />
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-red-600 text-xl">
                {ticket.tenPhim}
              </h2>
              <h3 className="text-orange-600 mt-3 text-lg">
                Ngày giờ chiếu:
                {moment(ticket.ngayDat).format(" DD/MM/YYYY - hh:mm A")}
              </h3>
              <p className="mt-3 text-lg">
                Cụm rạp: {ticket.danhSachGhe[0].tenHeThongRap}
              </p>
              <p className="mt-3 text-lg">
                Tên rạp: {ticket.danhSachGhe[0].tenCumRap}
              </p>
              <p className="mt-3 text-lg">
                Ghế:{" "}
                {_.sortBy(ticket.danhSachGhe.slice(0, 8), ["tenGhe"]).map(
                  (ghe, index, arr) => (
                    <span key={index}>
                      {ghe.tenGhe}
                      {index < arr.length - 1 ? ", " : ""}
                    </span>
                  ),
                )}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font mb-4 text-red-600">
            LỊCH SỬ ĐẶT VÉ
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">{renderTicket()}</div>
      </div>
    </section>
  );
}

export default function () {
  const navigate = useNavigate();
  const operations = (
    <Button
      onClick={() => {
        navigate("/", { replace: true });
      }}
      className="mr-3"
    >
      Quay lại trang chủ
    </Button>
  );
  const items = [
    {
      key: "1",
      label: "01. CHỌN GHẾ VÀ THANH TOÁN",
      children: <Checkout />,
    },
    {
      key: "2",
      label: "02. LỊCH SỬ ĐẶT VÉ",
      children: <BookingHistory />,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      tabBarExtraContent={operations}
      items={items}
      className="ml-3"
    />
  );
}
