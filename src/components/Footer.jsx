import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        width: "100vw",
        height: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"greenyellow",
        zIndex:"2"
      }}
    >
      <Typography>Developed By Mücahit</Typography>
      <Typography>Copright © Mücahit</Typography>
    </div>
  );
};

export default Footer;
