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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          >
            {countOfVisitors}
          </VisibilityIcon>
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
          onClick={handleExpandClick}
          aria-label="show more"
        >
          READ MORE
        </Button>
      </CardActions>
    </Card>
  );
};
