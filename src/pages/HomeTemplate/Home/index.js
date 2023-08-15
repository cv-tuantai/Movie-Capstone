import React from "react";
import HomeCarousel from "./Carousel";
import Menu from "./Menu";
import ListMovie from "./ListMovie";

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <ListMovie />
      <Menu />
    </div>
  );
}
