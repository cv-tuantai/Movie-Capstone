import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { actGetTheater } from "../../../../redux/actions/TheaterAction";
import { NavLink } from "react-router-dom";
import moment from "moment";

const Menu = () => {
  const data = useSelector((state) => state.TheaterReducer.data);
  const loading = useSelector((state) => state.TheaterReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetTheater());
  }, []);

  if (loading) return <div>Loading...</div>;

  const renderListTheater = () => {
    return (
      <Tabs
        className="container mx-auto xl:px-28 pb-10"
        tabPosition="left"
        items={data?.map((theater, index) => {
          return {
            label: (
              <img
                className="rounded-full"
                width={50}
                src={theater.logo}
                alt={index}
              />
            ),
            key: index,
            children: (
              <Tabs
                tabPosition="left"
                items={theater.lstCumRap?.slice(0, 15).map((item, index) => {
                  return {
                    label: (
                      <div className="flex">
                        <img
                          width={50}
                          src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg"
                          alt={index}
                        />
                        <div className="ml-3">
                          <p
                            style={{
                              textTransform: "uppercase",
                              color: "green",
                              textAlign: "left",
                            }}
                          >
                            {item.tenCumRap}
                          </p>
                          <p
                            className="text-left"
                            style={{
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              width: "250px",
                            }}
                          >
                            {item.diaChi}
                          </p>
                        </div>
                      </div>
                    ),
                    key: index,
                    children: item.danhSachPhim?.slice(0, 10).map((movie) => {
                      return (
                        <div className="flex mb-2" key={movie.maPhim}>
                          <img
                            src={movie.hinhAnh}
                            alt={movie.maPhim}
                            style={{
                              width: "90px",
                              height: "120px",
                              objectFit: "cover",
                              objectPosition: "center center",
                            }}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://picsum.photos/100";
                            }}
                          />
                          <div className="ml-3">
                            <p className="text-xl">{movie.tenPhim}</p>
                            <div className="grid grid-cols-4 gap-1 mt-2">
                              {movie.lstLichChieuTheoPhim
                                ?.slice(0, 8)
                                .map((showtime) => {
                                  return (
                                    <NavLink
                                      className="p-2 font-semibold rounded-md border border-slate-200 text-red-600"
                                      to="/"
                                      key={showtime.maLichChieu}
                                    >
                                      {moment(
                                        showtime.ngayChieuGioChieu,
                                      ).format("hh:mm A")}
                                    </NavLink>
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
            ),
          };
        })}
      />
    );
  };

  return <div className="hidden lg:block">{renderListTheater()}</div>;
};
export default Menu;
