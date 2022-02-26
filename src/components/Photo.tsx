import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useDispatch, useSelector } from '../store/Store';
import { useNavigate } from 'react-router-dom';
import * as UserService from '../api/UserService';
import { link } from 'fs';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b71c1c',
    },
  },
});

const Input = styled('input')({
  display: 'none',
});

const Photo = () => {
  const dispatch = useDispatch();
  const [inputs, set_inputs] = useState({});
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);
  console.log('userId', user);

  const [files, set_files] = useState([]);

  React.useEffect(() => {
    console.log(inputs);
  }, [inputs]);
  const image = useSelector((state: any) => state.image);

  // const handleInputChange = (e: any) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };
  // let filesData: any;
  const fileHandler = (e: any) => {
    set_files(e.target.files);
    // console.log('fileeHandler', filesData);
    const file = e.target.files[0];
    const fileExt = file.name.split('.').pop();
    const verifyFileExt = ['jpg', 'jpeg', 'png'].includes(
      fileExt.toLowerCase()
    );
    const fileSize = file.size;
    if (!verifyFileExt || fileSize > 2000000) {
      return alert('Archivo no válido');
    }
    set_inputs({ ...inputs, file });

    dispatch({
      type: 'setImage',
      payload: URL.createObjectURL(file),
    });
    console.log(image);
  };
  const handleSubmit = async (e: any) => {
    const data = new FormData();
    data.append('api_key', '588536896886691');
    console.log('aquí', files);
    data.append('file', files[0]);

    data.append('upload_preset', 'riy3i6re');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/riy3i6re/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);

    const newPhoto = { photo: file.url };

    const resUpdate = await UserService.updateUser(user.id, newPhoto);
    console.log(resUpdate);
    dispatch({
      type: 'SET_USER',
      payload: {
        id: resUpdate.data._id,
        name: resUpdate.data.name,
        email: resUpdate.data.email,
        lastname: resUpdate.data.lastname,
        photo: resUpdate.data.photo || '',
      },
    });
    console.log(user);
  };

  return (
    <>
      <Box>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <Typography
              component="h1"
              variant="h5"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'black',
                textDecoration: 'none',
                fontFamily: 'Poppins',
                fontSize: 28,
                textTransform: 'uppercase',
              }}
            >
              PHOTOGRAPHY
            </Typography>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: ' 45px 90px 30px',
                mb: '1em',
              }}
            >
              <Avatar
                id="file"
                // alt="Remy Sharp"
                variant="square"
                src={image}
                sx={{
                  width: '14rem',
                  height: '14rem',
                  alignItems: 'center',
                }}
              />
            </Grid>
            <Grid
              sx={{
                alignItems: 'center',
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent="center"
              >
                <label
                  className="upload-container"
                  htmlFor="contained-button-file"
                >
                  <Input
                    // accept="image/*"
                    id="contained-button-file"
                    // multiple
                    onChange={fileHandler}
                    type="file"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <PhotoCamera /> Upload Image
                  </Button>
                </label>
                <Button onClick={handleSubmit}>SUBIR FOTO</Button>
              </Stack>
            </Grid>
            {/* <label>
              <Input accept="image/*" multiple />
            </label> */}
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default Photo;
