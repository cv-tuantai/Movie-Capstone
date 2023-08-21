import React, { useEffect } from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actLoginSuccess } from "../../redux/actions/LoginAction";

export default function HomeTemplate() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(actLoginSuccess(user));
    }
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
