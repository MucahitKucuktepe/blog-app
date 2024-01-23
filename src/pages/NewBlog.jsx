import React, { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { Paper, Stack } from "@mui/material";

const NewBlog = () => {
  const { getCategories } = useBlogCalls();
  const { categories } = useSelector((state) => state.blog);
  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);
  return (
    <Stack display={"flex"} alignItems={"center"} marginTop={"3rem"}>
      <Paper
        elevation={7}
        style={{
          width: "40%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:"8px 10px 30px gray"
        }}
      >
        fgnjfdghnjdfgh
      </Paper>{" "}
    </Stack>
  );
};

export default NewBlog;
