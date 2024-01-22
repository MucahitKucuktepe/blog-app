import React from "react";
import { Outlet } from "react-router-dom";

import { Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const user = true;
  return user ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRouter;
