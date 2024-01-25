import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: "15px 15px 15px 15px black",
  p: 1,
};

export const UpdateModal = ({
  info,
  setInfo,
  open,
  setOpen,
  id,
  emptyState,
}) => {
  const { getBlogsDetail, updateBlog } = useBlogCalls();

  React.useEffect(() => {
    getBlogsDetail(id);
    getCategories();

  }, []);
  const { blogsDetail } = useSelector((state) => state.blog);


  console.log(blogsDetail);
  const handleCloseUpdate = () => {
    setOpen(false);
  };
  const { getCategories, postBlog } = useBlogCalls();
  const { categories } = useSelector((state) => state.blog);

  const { user } = useSelector((state) => state.auth);
  //   console.log(user);

  // console.log(categories);
  const handleChange = (e) => {
    // const { name, value } = e.target
    // setInfo({ ...info, [name]: value })
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    updateBlog(id, info);
  };
  const published = [
    { id: 1, name: "Please Choose", value: "" },
    { id: 2, name: "Draft", value: false },
    { id: 3, name: "Published", value: true },
  ];

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack display={"flex"} alignItems={"center"} marginTop={"1rem"}>
            <Typography variant="h4" color="gray" mt={2} padding={"1rem"}>
              New Blog
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: "1rem",
                margin: "auto",
                width: "90%",
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
                  {categories.map((item) =>
                    user ? (
                      <MenuItem key={item._id} value={item._id || ""}>
                        {item.name}
                      </MenuItem>
                    ) : (
                      <MenuItem key={item._id}></MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="isPublish">Status</InputLabel>
                <Select
                  labelId="isPublish"
                  id="isPublish"
                  name="isPublish"
                  value={info?.isPublish}
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
              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{ backgroundColor: "green" }}
              >
                UPDATE BLOG
              </Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
