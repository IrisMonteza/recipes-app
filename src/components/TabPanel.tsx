import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Avatar,
  Box,
  createTheme,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import Account from './Account';
import Photo from './Photo';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from '../store/Store';

const themes = createTheme({
  palette: {
    primary: {
      main: '#ffcdd2',
    },
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const user = useSelector((state: any) => state.user);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        bgcolor: 'background.paper',
        width: '100%',
        maxWidth: '665px',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
        },
        margin: '100px auto 0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: {
            xs: '40px auto 0',
            sm: '40px auto 0',
            md: '0 30px 0 0',
            lg: '0 30px 0 0',
            xl: '0 30px 0 0',
          },
          alignItems: 'center',
        }}
      >
        <Avatar
          // alt="Remy Sharp"
          src={user.photo}
          // src={imagePreview}
          sx={{
            width: '8rem',
            height: '8rem',
            mb: '.5rem',
            fontSize: '50px',
          }}
        >
          {user.photo ? user.photo : `${user.name[0]}`}
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mb: '1em',
            fontFamily: 'Poppins',
            textTransform: 'uppercase',
          }}
        >
          {user.name}
        </Typography>
      </Box>
      <Box>
        <AppBar position="static">
          <ThemeProvider theme={themes}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
              sx={{ background: '#b71c1c' }}
            >
              <Tab label="Cuenta" {...a11yProps(0)} />
              <Tab label="Fotografía" {...a11yProps(1)} />
            </Tabs>
          </ThemeProvider>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Account />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Photo />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Box>
  );
}
