import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useBlogCalls from "../../hooks/useBlogCalls";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export const DeleteModal = ({ open, setOpen, id }) => {
  // console.log(id);
  const handleClose = () => setOpen(false);
  const { deleteBlog } = useBlogCalls();

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: "center" }}
          >
            <strong>
              Do you really want to delete your blog? This process cannot be
              undone!
            </strong>
          </Typography>
          <div
            style={{
              display: "flex",
              gap: "3rem",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
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
              onClick={handleClose}
            >
              CANCEL
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
              onClick={() => deleteBlog(id)}
            >
              DELETE
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
