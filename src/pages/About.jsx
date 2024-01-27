import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import image from "../assets/About.jpg";
const About = () => {
  return (
    <div>
      <Stack display={"flex"} alignItems={"center"} marginTop={"3rem"}>
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
          <div>
            <img
              src={image}
              alt=""
              width={"90%"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop:"1rem",
                margin:"auto",
                borderRadius:"50%"
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
          </div>
        </Paper>{" "}
      </Stack>
    </div>
  );
};

export default About;
