import React, { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import image from "../assets/Zumwalt.jpg";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const NewBlog = () => {
  const { getCategories, postBlog } = useBlogCalls();
  const { categories } = useSelector((state) => state.blog);
  const [info, setInfo] = useState({
    title: "",
    content: "",
    image: "",
    categoryId: "",
    isPublished: "",
  });
  useEffect(() => {
    getCategories();
  }, []);
  // console.log(categories);
  const handleChange = (e) => {
    // const { name, value } = e.target
    // setInfo({ ...info, [name]: value })
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    postBlog(info);
  };
  const published = [
    { id: 1, name: "Please Choose", value: "" },
    { id: 2, name: "Draft", value: false },
    { id: 3, name: "Published", value: true },
  ];
  return (
    <Stack display={"flex"} alignItems={"center"} marginTop={"3rem"}>
      <Paper
        elevation={7}
        style={{
          width: "40%",
          maxWidth:"500px",
          height: "auto",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          boxShadow: "8px 10px 30px black",
        }}
      >
        <Typography variant="h4" color="gray" mt={4} padding={"1rem"}>
          New Blog
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: "1rem",
            margin: "auto",
          }}
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            label="Title"
            name="title"
            id="title"
            type="text"
            variant="outlined"
            value={info.title || ""}
            onChange={handleChange}
            required
          />
          <TextField
            label="Image URL"
            name="image"
            id="image"
            type="url"
            variant="outlined"
            value={info.image || ""}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth>
            <InputLabel id="categoryId">Category</InputLabel>
            <Select
              labelId="categoryId"
              id="categoryId"
              name="categoryId"
              value={info.categoryId || ""}
              label="Category"
              onChange={handleChange}
            >
              {categories.map((item) => (
                <MenuItem key={item._id} value={item._id || ""}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="isPublished">Status</InputLabel>
            <Select
              labelId="isPublished"
              id="isPublished"
              name="isPublished"
              value={info.isPublished}
              label="Please Choose..."
              onChange={handleChange}
            >
              {published.map((item) => (
                <MenuItem key={item.id} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Content"
            name="content"
            id="content"
            type="textArea"
            variant="outlined"
            value={info.content || ""}
            onChange={handleChange}
            required
            rows={4}
            multiline
          />
          <Button type="submit" variant="contained" size="large">
            ADD BLOG
          </Button>
          <Box sx={{ margin: "auto" }}>
            <Paper>
              <img
                src={image}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "5px 5px 5px gray",
                }}
              />
            </Paper>
          </Box>
        </Box>
      </Paper>{" "}
    </Stack>
  );
};

export default NewBlog;
