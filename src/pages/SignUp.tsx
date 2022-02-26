import { ThemeProvider } from '@emotion/react';
import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../api/User';
import * as UserService from '../api/UserService';
import { toast } from 'react-toastify';
import { useDispatch } from '../store/Store';

// type InputChange = ChangeEvent<HTMLInputElement>;

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#b71c1c',
    },
  },
});
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState<User>({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await UserService.createUser(user);
    toast.success('Nuevo usuario registrado');
    console.log(res);
    dispatch({
      type: 'SET_USER',
      payload: { ...res.data, id: res.data._id },
    });

    navigate('/');
  };
  return (
    <>
      <Box sx={{ display: 'block', height: '8vh' }} />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
            <Typography component="h1" variant="h5">
              Registrarse
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    // id="name"
                    label="First Name"
                    autoFocus
                    onChange={handleInputChange}
                    sx={{ bgcolor: 'white', borderRadius: '5px' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    // id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="family-name"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    // id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    // id="password"
                    autoComplete="new-password"
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
              >
                Registrarse
              </Button>
              {/* {error && <Alert severity="error">{error}</Alert>} */}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  {/* <Link to={'/signup'}>{"Don't have an account? Sign Up"}</Link> */}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default SignUp;
