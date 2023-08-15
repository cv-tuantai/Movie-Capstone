import React from "react";
import { Navigate } from "react-router-dom";
import Checkout from "../../pages/Checkout";

export default function CheckoutTemplate() {
  if (!localStorage.getItem("AdminUser")) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <Checkout />
    </div>
  );
}
