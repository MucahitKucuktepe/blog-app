import React from "react";
import { IconButton, Paper, Stack } from "@mui/material";
import image from "../assets/About.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Navigate, useNavigate } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Stack display={"flex"} alignItems={"center"} marginTop={"3rem"} marginBottom={"70px"}>
        <Paper
          elevation={7}
          style={{
            width: "40%",
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
            <p style={{ textAlign: "justify", padding: "1rem" }}>
              Hello. I'm Mücahit Mehmet KÜÇÜKTEPE, a FrontEnd Developer. I've
              undergone specialized training in Frontend Development, gaining
              proficiency in various technologies within this domain. Throughout
              the course, I acquired knowledge in cutting-edge frontend
              development technologies and successfully applied them to several
              projects. These projects, showcasing my active use of acquired
              skills, are accessible on my GitHub account.{" "}
            </p>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center",gap:"2rem"}}>
              <IconButton
                href="https://github.com/MucahitKucuktepe"
                target="_blank"
              >
                <GitHubIcon style={{ fontSize: "3rem", color: "black" }} />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/mucahit-mehmet-kucuktepe/"
                target="_blank"
              >
                <LinkedInIcon style={{ fontSize: "3.4rem", color: "blue" }} />
              </IconButton>
              <IconButton>
                <a href="tel:+905331934518">
                  {" "}
                  <CallIcon style={{ fontSize: "3rem", color: "black" }} />
                </a>
              </IconButton>
            </div>
          </div>
        </Paper>{" "}
      </Stack>
    </div>
  );
};

export default About;
