import React from "react";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosWithToken, axiosPublic } = useAxios();
  dispatch(fetchStart());
  const login = async (userinfo) => {
    try {
      const { data } = await axiosPublic.post("/auth/login/", userinfo);
      console.log(data);
      dispatch(loginSuccess(data));
    } catch (error) {}
    console.log(error);
    dispatch(fetchFail());
  };

  return { login };
};

export default useAuthCalls;
