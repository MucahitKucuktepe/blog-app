import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

const CommentCard = ({ blogId, comment, createdAt, userId, _id }) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "auto",
        marginTop: "1rem",
        marginBottom: "4rem",
      }}
    >
      <CardHeader
        title={userId.username}
        subheader={`Published Date:${new Date(
        createdAt
        ).toLocaleDateString()}`}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
