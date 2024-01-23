import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useBlogCalls from "../../hooks/useBlogCalls";

export const CommentForm = ({ _id }) => {
  const { postComments } = useBlogCalls();
  const emptyForm = {
    blogId: "",
    comment: "",
  };
  const [interpretation, setInterpretation] = React.useState({
    blogId: `${_id}`,
    comment: "",
  });
  const handleChange = (e) => {
    setInterpretation({ ...interpretation, comment: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComments(interpretation);
  setInterpretation(emptyForm)
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { marginBottom: "1rem", width: "100%" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Comment"
          placeholder="Add a comment"
          onChange={handleChange}
          value={interpretation.comment}
        />
      </div>
      <Button
        sx={{
          backgroundColor: "rgba(0, 255, 0, 0.2)",
          width: "100%",
          color: "black",
          "&:hover": {
            backgroundColor: "rgba(0, 255, 0, 0.2)",
            color: "red",
          },
        }}
        variant="contained"
        aria-label="show more"
        type="submit"
      >
        ADD COMMENT
      </Button>
    </Box>
  );
};
