import * as yup from "yup";
import { Formik, Field, Form } from "formik";
import { TextField } from 'formik-mui';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const LogInSchema = yup.object().shape({
  email: yup
    .string()
    .trim("Imvalid Email address")
    .required("Email is required!"),
  password: yup.string().required("Password is required"),
});

export default function Login() {
  const handleSubmit = (FormData) => {
    console.log(FormData);
  };

  const initialValues: any = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LogInSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({}) => (
        <Form>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
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
              <Box sx={{ mt: 1 }}>
                <Field
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  component={TextField}
                />
                <Field
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  component={TextField}
                />
                <Grid container rowSpacing={1}>
                  <Grid item xs>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                  </Grid>

                  <Grid item m={1}>
                    <Link to="#">Forgot password?</Link>
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Log In
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={"/sign-in"}>
                    <span>Don't have an account? Sign in</span>
                  </Link>
                </Grid>
              </Grid>
              </Box>
            </Box>
          </Container>
        </Form>
      )}
    </Formik>
  );
}
