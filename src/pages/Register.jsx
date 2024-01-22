import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/register.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import { Formik } from "formik";
import useAuthCalls from "../hooks/useAuthCalls";
import { useSelector } from "react-redux";

const Register = () => {
  const { register } = useAuthCalls();
  const navigate= useNavigate()
  const {user}=useSelector(state=>state.auth)
  console.log(user)

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            WARSHIP BLOG
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              firstName: "",
              lastName: "",
              image:"",
              city:"",
              bio:"",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              console.log(values)
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/login">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid
          item
          xs={0}
          sm={7}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <img src={image} alt="" width={"100%"} />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
