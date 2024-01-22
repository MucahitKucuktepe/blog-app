import React from "react";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  getBlogsSuccess,
  getBlogsDetailSucces,
} from "../features/blogSlice";
import { useNavigate } from "react-router-dom";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken, axiosPublic } = useAxios();
  const navigate= useNavigate()
  const getBlogs = async (page, limit) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(
        `/blogs/?page=${page}&limit=${limit}`
      );
      dispatch(getBlogsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const getBlogsDetail = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(`/blogs/${id}`);
      dispatch(getBlogsDetailSucces(data));
      navigate(`/detail/${id}`)
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { getBlogs, getBlogsDetail };
};

export default useBlogCalls;
