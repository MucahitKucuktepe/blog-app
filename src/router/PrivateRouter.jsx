import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const user = true;
  return user ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRouter;
