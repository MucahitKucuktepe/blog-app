import React, { useEffect } from "react";
import { useSelector } from "react-redux";
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
import { styled } from "@mui/material/styles";
import CommentCard from "../components/blog/CommentCard";
import { CommentForm } from "../components/blog/CommentForm";
import useBlogCalls from "../hooks/useBlogCalls";
import { CloudDone } from "@mui/icons-material";
import { useParams } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",

  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Detail = () => {
  const { getBlogs, blogLikes, deleteBlog } = useBlogCalls();
  const { blogsDetail } = useSelector((state) => state.blog);
  console.log(blogsDetail);
  const { comments, _id, userId } = blogsDetail;
  const { id } = useParams();
  // console.log(id); //? blog detail id
  const { getBlogsDetail } = useBlogCalls();
  const author = userId?._id;
  const { user } = useSelector((state) => state.auth);
  console.log(author);
  const person = user?._id;
  console.log(person);
  useEffect(() => {
    getBlogsDetail(id);
  }, []);

  const blogCardLike = blogsDetail.likes;
  // console.log(blogCardLike);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleFav = () => {
    blogLikes(id);
    getBlogsDetail(id);
    getBlogs(1, 10);
  };

  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "auto",
        marginTop: "1rem",
        marginBottom: "4rem",
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={blogsDetail?.image}
        alt="Paella dish"
      />
      <CardHeader
        title={blogsDetail?.title}
        subheader={`Published Date:${new Date(
          blogsDetail?.createdAt
        ).toLocaleDateString()}`}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {blogsDetail?.content}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <IconButton aria-label="add to favorites" onClick={handleFav}>
          <FavoriteIcon
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 255, 0, 0.2)",
                color: "red",
              },
            }}
            style={
              blogCardLike?.includes(person)
                ? { color: "red" }
                : { color: "black" }
            }
          />
          <span> {blogsDetail.likesNumber} </span>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <AddCommentIcon
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 255, 0, 0.2)",
                color: "red",
              },
            }}
          />
          <span>{blogsDetail?.commentsNumber}</span>
        </ExpandMore>
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
     
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CommentForm _id={_id} />
          {comments?.map((item) => (
            <CommentCard key={item._id} {...item} />
          ))}
        </CardContent>
      </Collapse>
      {person == author && (
          <div style={{display:"flex", gap:"3rem", justifyContent:"flex-end", margin:"1rem"}}>
            {" "}
            <Button
              sx={{
                color: "white",
                backgroundColor: "green",
                "&:hover": {
                  backgroundColor: "rgba(0, 255, 0, 0.2)",
                  color: "red",
                },
              }}
              variant="contained"
              
            >
              UPDATE BLOG
            </Button>
            <Button
              sx={{
                color: "white",
                backgroundColor: "red",
                "&:hover": {
                  backgroundColor: "rgba(0, 255, 0, 0.2)",
                  color: "red",
                },
              }}
              variant="contained"
              onClick={()=>deleteBlog(id)}
            >
              DELETE BLOG
            </Button>
          </div>
        )}
    </Card>
  );
};

export default Detail;
