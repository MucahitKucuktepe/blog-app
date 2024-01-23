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
  const navigate = useNavigate();
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
    
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const postComments = async (info) => {
    console.log(info.blogId)
    dispatch(fetchStart());
    try {
      const {data}=await axiosWithToken.post(`/comments/`,info);
      console.log(data)
      getBlogsDetail(info.blogId)
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { getBlogs, getBlogsDetail, postComments };
};

export default useBlogCalls;
