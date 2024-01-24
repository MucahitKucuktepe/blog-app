import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddCommentIcon from "@mui/icons-material/AddComment";

import { Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useSelector } from "react-redux";

export const UserBlogCard = ({
  _id,
//   userId,
//   categoryId,
  comments,
  content,
  image,
  likes,
  title,
  createdAt,
  countOfVisitors,
  blogLike,
}) => {
  const navigate = useNavigate();
  const { getBlogsDetail } = useBlogCalls();
  const { userBlogs } = useSelector((state) => state.blog);
  const { user } = useSelector((state) => state.auth);
  const person = user._id;
//   console.log(person);

  const handleDetail = (id) => {
    console.log(id);
    getBlogsDetail(id);
    navigate(`/detail/${id}`);
  };
  // console.log(_id)
  // console.log(blogs);
  const blogCardLike = userBlogs.filter((blog) => blog._id == _id);
//   console.log(blogCardLike[0].likes)

  const commentsNumber = comments.length;
  const likesNumber = likes.length;
  const fav = blogCardLike[0].likes;
//   console.log(fav);


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
        subheader={`Published Date:${new Date(createdAt).toLocaleDateString()}`}
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`${content.slice(0, 100)}...`}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Button
          aria-label="add to favorites"
          onClick={() => {
            blogLike(_id);
          }}
        >
          <FavoriteIcon
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 255, 0, 0.2)",
                color: "red",
              },
            }}
            style={fav.includes(person) ? { color: "red" } : { color: "black" }}
          />

          <span> {likesNumber} </span>
        </Button>
        <IconButton aria-label="share">
          <AddCommentIcon
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 255, 0, 0.2)",
                color: "red",
              },
            }}
          />
          <span>{commentsNumber}</span>
        </IconButton>
        <IconButton>
          <VisibilityIcon
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 255, 0, 0.2)",
                color: "red",
              },
            }}
          />
          <span>{countOfVisitors}</span>
        </IconButton>
        <Button
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(0, 255, 0, 0.2)",
              color: "red",
            },
          }}
          variant="contained"
          onClick={() => handleDetail(_id)}
          aria-label="show more"
        >
          READ MORE
        </Button>
      </CardActions>
    </Card>
  );
};
