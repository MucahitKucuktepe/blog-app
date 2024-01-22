import React from "react";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchFail, fetchStart, getBlogsSuccess } from "../features/blogSlice";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken,axiosPublic } = useAxios();
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

  return { getBlogs };
};

export default useBlogCalls;
