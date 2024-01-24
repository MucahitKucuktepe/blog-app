import React, { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { BlogCard, Card } from "../components/blog/BlogCard";
import { Stack } from "@mui/material";

const Dashboard = () => {
  const { getBlogs, blogLikes } = useBlogCalls();
  const { blogs } = useSelector((state) => state.blog);
  console.log(blogs);
  useEffect(() => {
    getBlogs(1, 25);
  }, []);
  const blogLike = (id) => {
    blogLikes(id);
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
      {blogs.map((blog) => (
        <BlogCard key={blog._id} {...blog} blogLike={blogLike} />
      ))}
    </div>
  );
};

export default Dashboard;
