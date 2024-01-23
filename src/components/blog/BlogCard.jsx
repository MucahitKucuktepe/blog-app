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
import Detail from "../../pages/Detail";

export const BlogCard = ({
  _id,
  userId,
  categoryId,
  comments,
  content,
  image,
  likes,
  title,
  createdAt,
  countOfVisitors,
}) => {
  const navigate = useNavigate();
  const { getBlogsDetail } = useBlogCalls();
  React.useEffect(() => {
  getBlogsDetail(_id)
  }, [])
  


  const handleDetail = (id) => {
    console.log(id);
    getBlogsDetail(id);
    navigate(`/detail/${id}`);
  };

  const commentsNumber = comments.length;
  const likesNumber = likes.length;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
        subheader={`PubLİshed Date:${new Date(createdAt).toLocaleDateString()}`}
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 255, 0, 0.2)",
                color: "red",
              },
            }}
          />
          <span> {likesNumber} </span>
        </IconButton>
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
