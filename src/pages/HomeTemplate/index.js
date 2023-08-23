import React, { useEffect } from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actTryLogout } from "../../redux/actions/LoginAction";

export default function HomeTemplate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //logout sau khi hết expire dù refresh trang
  useEffect(() => {
    dispatch(actTryLogout(navigate));
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
