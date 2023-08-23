import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actTryLogout } from "../../redux/actions/LoginAction";

export default function AdminTemplate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //logout sau khi hết expire dù refresh trang
  useEffect(() => {
    dispatch(actTryLogout(navigate));
  }, []);

  return (
    <div>
      <Dashboard />
    </div>
  );
}
