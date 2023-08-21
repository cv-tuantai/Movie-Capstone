import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { actGetCarousel } from "../../../../redux/actions/CarouselAction";
import Loader from "../../../../components/Loader";

export default function HomeCarousel() {
  const { data, loading } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetCarousel());
  }, []);

  const contentStyle = {
    height: "550px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const renderCarousel = () => {
    if (loading) return <Loader />;
    return data?.map((item) => {
      return (
        <div key={item.maBanner}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          ></div>
        </div>
      );
    });
  };

  return (
    <div>
      <Carousel effect="fade" autoplay pauseOnHover={false}>
        {renderCarousel()}
      </Carousel>
    </div>
  );
}
