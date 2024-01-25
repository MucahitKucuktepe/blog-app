import React from "react";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  getBlogsSuccess,
  getBlogsDetailSucces,
  getBlogsLikesDetail,
  getCategoriesSlice,
  getUserBlogsSuccess,
  getBlogsTotalRecord,
  deleteBlogSucces
} from "../features/blogSlice";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken, axiosPublic } = useAxios();
  const navigate = useNavigate();
  const getBlogs = async (page, limit) => {
    dispatch(fetchStart());
    try {
      const  data  = await axiosPublic.get(
        `/blogs/?page=${page}&limit=${limit}`
      );
      dispatch(getBlogsSuccess(data.data));
  
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
    console.log(info.blogId);
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`/comments/`, info);
      console.log(data);
      getBlogsDetail(info.blogId);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const blogLikes = async (blogId) => {
    const { data } = await axiosWithToken.post(`/blogs/${blogId}/postLike`);
    console.log(data);
    dispatch(getBlogsLikesDetail(data));
    getBlogsDetail(blogId);
    getBlogs(1, 10);
  };
  const getCategories = async () => {
    try {
      const { data } = await axiosPublic.get(`/categories`);
      dispatch(getCategoriesSlice(data));
    } catch (error) {
      console.log(error);
    }
  };
  const postBlog = async (info) => {
    try {
      const { data } = await axiosWithToken.post(`/blogs/`, info);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserBlogs = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(
        `/blogs/?author=${id}`
      );
      dispatch(getUserBlogsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const deleteBlog = async (blogId) => {
    try {
      const { data } = await axiosWithToken.delete(`/blogs/${blogId}`);
      console.log(data);
      // dispatch(deleteBlogSucces())
      toastSuccessNotify("Delete Blog Success!")
      getBlogs(1, 10);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  const updateBlog = async (blogId,info) => {
    try {
      const { data } = await axiosWithToken.put(`/blogs/${blogId}`,info);
      // console.log(data);
      // dispatch(deleteBlogSucces())
      toastSuccessNotify("Update Blog Success!")
      getBlogs(1, 16);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };


  return {
    getBlogs,
    getBlogsDetail,
    postComments,
    blogLikes,
    getCategories,
    postBlog,
    getUserBlogs,
    deleteBlog,
    updateBlog
  };
};

export default useBlogCalls;
