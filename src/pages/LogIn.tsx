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
import { useNavigate } from 'react-router-dom';
import * as UserService from '../api/UserService';
import { useDispatch } from '../store/Store';

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
const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    try {
      const { data } = await UserService.signIn({
        email: formData.get('email')?.toString() || '',
        password: formData.get('password')?.toString() || '',
      });
      console.log('data', data);

      dispatch({
        type: 'SET_USER',
        payload: {
          id: data.user._id,
          name: data.user.name,
          email: data.user.email,
          lastname: data.user.lastname,
          password: data.user.password,
          photo: data.user.photo || '',
        },
      });

      navigate('/');
    } catch (error) {
      console.log(error);
    }
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
              Iniciar Sesión
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'secondary.main' }}
              >
                Iniciar Sesión
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

export default LogIn;
