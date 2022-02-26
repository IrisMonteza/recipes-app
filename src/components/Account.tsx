import {
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from '../store/Store';
import { toast } from 'react-toastify';
import React, { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b71c1c',
    },
  },
});

const Account = () => {
  const user = useSelector((state: any) => state.user);

  const [newPassword, set_newPassword] = useState<any>({
    newPassword: '',
    oldPassword: '',
  });

  const handleNew = async (e: any) => {
    set_newPassword({ ...newPassword, newPassword: e.target.value });
  };

  const handleOld = async (e: any) => {
    set_newPassword({ ...newPassword, oldPassword: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    toast.success('Contraseña actualizada');
  };

  return (
    <>
      <Box>
        <Container component="main" maxWidth="xs">
          <ThemeProvider theme={theme}>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'black',
                fontFamily: 'Poppins',
                fontSize: 28,
                textDecoration: 'none',
              }}
            >
              CUENTA
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: 2,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  value={user.name}
                  autoFocus
                  sx={{ bgcolor: 'white', borderRadius: '5px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  value={user.lastname}
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Correo"
                  value={user.email}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <div>
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: 3,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    placeholder="Contraseña actual"
                    type="password"
                    onChange={handleOld}
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} flexDirection={'row'}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    placeholder="Nueva contraseña"
                    type="password"
                    onChange={handleNew}
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                onSubmit={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Cambiar Contraseña
              </Button>
            </div>
          </ThemeProvider>
        </Container>
      </Box>
    </>
  );
};

export default Account;
