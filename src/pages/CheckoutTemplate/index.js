import React from "react";
import { Navigate } from "react-router-dom";
import Checkout from "./Checkout";

export default function CheckoutTemplate() {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <Checkout />
    </div>
  );
}
