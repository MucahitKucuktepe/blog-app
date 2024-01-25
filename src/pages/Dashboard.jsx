import React, { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { BlogCard, Card } from "../components/blog/BlogCard";
import { Pagination, Stack } from "@mui/material";

const Dashboard = () => {
  let page = 0;
  const { getBlogs, blogLikes, getBlogsTotal } = useBlogCalls();
  const { blogs, currentPage, totalPages } = useSelector((state) => state.blog);
  console.log(blogs);
  useEffect(() => {
    getBlogs(1, 5);
  }, []);
  const blogLike = (id) => {
    blogLikes(id);
    getBlogs(currentPage, 5);
  };
  console.log(currentPage);
  console.log(totalPages);
  const handleClick = (e,page) => {
    getBlogs(page, 5)
    console.log(`Şu anki sayfa: ${page}`);
  };
  return (
    <>
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
      <Stack
        spacing={2}
        style={{
          marginBottom: "65px",
          display: "flex",
          alignItems: "center",
        }}

      >
        <Pagination
          count={Number(totalPages)}
          color="secondary"
          onChange={handleClick}
        />
      </Stack>
    </>
  );
};

export default Dashboard;
