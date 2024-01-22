import React from 'react'
import { useSelector } from 'react-redux'
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
import VisibilityIcon from "@mui/icons-material/Visibility";

import { Button } from "@mui/material";
const Detail = () => {
  const {blogsDetail} =useSelector(state=>state.blog)
  console.log(blogsDetail)
  return (
    <Card sx={{ maxWidth: 600, margin:"auto", marginTop:"2rem" }}>
     <CardMedia component="img" height="194" image={blogsDetail.image} alt="Paella dish" />
      <CardHeader
        title={blogsDetail.title}
        subheader={`Published Date:${new Date(blogsDetail.createdAt).toLocaleDateString()}`}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
         
          </Avatar>
        }
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {blogsDetail.content}
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
          <span> {blogsDetail.likesNumber} </span>
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
          <span>{blogsDetail.commentsNumber}</span>
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
          <span>{blogsDetail.countOfVisitors}</span>
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
          aria-label="show more"
        >
          READ MORE
        </Button>
      </CardActions>
    </Card>
  )
}

export default Detail