import React from "react";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosWithToken, axiosPublic } = useAxios();

  const login = async (userinfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login/", userinfo);
      console.log(data);
      toastSuccessNotify("Login Success!");
      dispatch(loginSuccess(data));
      navigate("/");
    } catch (error) {
      console.log(error);
      toastErrorNotify("Login Unsuccess!");
      dispatch(fetchFail());
    }
  };

  const register = async (userinfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/users/", userinfo);
      console.log(data);
      toastSuccessNotify("Register Success!");
      dispatch(registerSuccess(data));
      navigate("/");
    } catch (error) {
      console.log(error);
      toastErrorNotify("Register Unsuccess!");
      dispatch(fetchFail());
    }
  };

  const logOut = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get("/auth/logout/");
      console.log(data);
      toastSuccessNotify("Logout  Success!");
      dispatch(logoutSuccess());
      navigate("/");
    } catch (error) {
      console.log(error);
      toastErrorNotify("Logout Unsuccess!");
      dispatch(fetchFail());
    }
  };

  return { login, register, logOut };
};

export default useAuthCalls;
