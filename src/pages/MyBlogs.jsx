import React, { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { BlogCard, Card } from "../components/blog/BlogCard";
import { Stack } from "@mui/material";
import { UserBlogCard } from "../components/blog/UserBlogCard";

const MyBlogs = () => {
  const { getBlogs, blogLikes, getUserBlogs } = useBlogCalls();
  const { blogs, userBlogs } = useSelector((state) => state.blog);
  const { user } = useSelector((state) => state.auth);
  const userId = user._id;
  console.log(userId);
  useEffect(() => {
    getUserBlogs(userId);
  }, []);
  const blogLike = (id) => {
    blogLikes(id);

    getUserBlogs(userId);
    getBlogs(1, 10);
  };
  return (
    <div
      style={{
        marginTop: "1rem",
        marginBottom: "4rem",
        display: "flex",
        justifyContent: "space-around",
        gap: "1rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {userBlogs.map((blog) => (
        <UserBlogCard key={blog._id} {...blog} blogLike={blogLike} />
      ))}
    </div>
  );
};

export default MyBlogs;
