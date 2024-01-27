import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import image from "../assets/USS_Gridley_(DDG-101)_2008.jpg";
import { Container } from "@mui/material";
import { Formik } from "formik";
import LoginForm, { loginSchema } from "../components/auth/LoginForm";
import useAuthCalls from "../hooks/useAuthCalls";
import { useSelector } from "react-redux";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Login = () => {
  const { login } = useAuthCalls();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh", gap: "1px" }}>
        <CssBaseline />

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{ margin: "auto" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={(values, actions) => {
                console.log(values);
                login(values);
                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={(props) => <LoginForm {...props} />}
            ></Formik>
          </Box>
        </Grid>
        <Grid
          item
          component={Paper}
          xs={false}
          sm={6}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Container style={{ margin: "auto" }}>
            <img
              src={image}
              alt="img"
              style={{ width: "100%" }}
              component={Paper}
            />
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Login;
