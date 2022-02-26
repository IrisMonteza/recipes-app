import { ThemeProvider } from '@emotion/react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  createTheme,
  Link,
  Toolbar,
} from '@mui/material';
import { red } from '@mui/material/colors';
import * as React from 'react';
import LogoLink from './LogoLink';
import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';
import { useDispatch, useSelector } from '../store/Store';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: red[300],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const NavBar = () => {
  const user = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log('user desde el navBar', user);

  function onLogOut() {
    dispatch({
      type: 'UNSET_USER',
    });
    localStorage.removeItem('user');
    navigate('/');
  }

  return (
    <>
      <AppBar position="fixed" style={{ background: '#C04141' }}>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
              },
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <LogoLink />

            <Box
              sx={{
                display: 'flex',
                marginBottom: {
                  xs: '10px',
                  sm: '10px',
                  md: 0,
                  lg: 0,
                  xl: 0,
                },
              }}
            >
              {!user.email ? (
                <>
                  <ThemeProvider theme={theme}>
                    <LogInButton />
                    <SignUpButton />
                  </ThemeProvider>
                </>
              ) : (
                <>
                  <Box sx={{ display: 'flex' }}>
                    <Button
                      onClick={onLogOut}
                      sx={{
                        background: 'white',
                        color: 'black',
                        marginRight: '10px',
                      }}
                    >
                      Salir
                    </Button>
                    <Link
                      href={'/profile'}
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                      }}
                    >
                      <Avatar src={user.photo}>
                        {user.photo ? user.photo : `${user.name[0]}`}
                      </Avatar>
                    </Link>
                  </Box>
                </>
              )}
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};
export default NavBar;
