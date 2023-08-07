import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { actGetTheater } from "../../../../redux/actions/TheaterAction";

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
                items={theater.lstCumRap?.map((item, index) => {
                  return {
                    label: (
                      <div className="flex">
                        <img
                          width={50}
                          src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg"
                          alt={index}
                        />
                        <div className="ml-3">
                          {item.tenCumRap}
                          <p className="text-red-600 text-left">Detail</p>
                        </div>
                      </div>
                    ),
                    key: index,
                    children: item.tenCumRap,
                  };
                })}
              />
            ),
          };
        })}
      />
    );
  };

  return <>{renderListTheater()}</>;
};
export default Menu;
