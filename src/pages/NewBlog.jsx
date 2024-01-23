import React, { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
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
  const { getCategories } = useBlogCalls();
  const { categories } = useSelector((state) => state.blog);
  const [info, setInfo] = useState({});
  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);
  const handleChange = (e) => {
    // const { name, value } = e.target
    // setInfo({ ...info, [name]: value })
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {};
  return (
    <Stack display={"flex"} alignItems={"center"} marginTop={"3rem"}>
      <Paper
        elevation={7}
        style={{
          width: "40%",
          height: "80vh",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          boxShadow: "8px 10px 30px gray",
        }}
      >
        <Typography variant="h4" color="gray" mt={4}>
          New Blog
        </Typography>
        <Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
            <FormControl fullWidth>
              <InputLabel id="categoryId">Category</InputLabel>
              <Select
                labelId="categoryId"
                id="categoryId"
                name="categoryId"
                value={info.categoryId}
                label="Category"
                onChange={handleChange}
              >
                {categories.map((item) => (
                  <MenuItem key={item._id} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              {info._id ? "Update Firm" : "Add Firm"}
            </Button>
          </Box>
        </Box>
      </Paper>{" "}
    </Stack>
  );
};

export default NewBlog;
