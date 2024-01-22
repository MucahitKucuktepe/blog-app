import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const {user}= useSelector(state=>state.auth)
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
