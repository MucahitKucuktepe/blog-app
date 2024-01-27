import React from "react";
import { IconButton, Paper, Stack } from "@mui/material";
import image from "../assets/About.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import { useSelector } from "react-redux";
const About = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const image = user.image;
  const biography = user.bio;
  const userName = user.username;
  const email = user.email;
  return (
    <div>
      <Stack
        display={"flex"}
        alignItems={"center"}
        marginTop={"3rem"}
        marginBottom={"70px"}
      >
        <Paper
          elevation={7}
          style={{
            width: "70%",
            maxWidth: "500px",
            height: "60%",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            boxShadow: "8px 10px 30px black",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={image}
              alt=""
              style={{
                width: "98%",
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
                margin: "auto",
                borderRadius: "50%",
                boxShadow: "2px 5px 20px red",
              }}
            />
            <h1
              style={{
                display: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              {userName}{" "}
            </h1>
            <h2
              style={{
                display: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              {" "}
              {email}{" "}
            </h2>
            <h1
              style={{
                display: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              {biography}
            </h1>
          </div>
        </Paper>{" "}
      </Stack>
    </div>
  );
};

export default About;
