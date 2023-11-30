import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().trim().required('Required'),
    lastname: Yup.string().trim().required('Required'),
    email: Yup.string().trim().email('Invalid email').required("Required"),
    password: Yup.string().required('Required'),    
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('Required'),
  });

  const initialValues: any = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };



  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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
              Sign up
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoComplete="given-name"
                    name="firstname"
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="family-name"
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="new-password"
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    component={TextField}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={"/log-in"}>
                    <span>Already have an account? Log in</span>
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