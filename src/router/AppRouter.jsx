import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../pages/Dashboard";
import NewBlog from "../pages/NewBlog";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/newBlog" element={<NewBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
