// import { Link } from 'react-router-dom';
// Material UI
import { Button, Link } from '@mui/material';

const SignUpButton = () => {
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          textTransform: 'none',
          border: 'solid white 1px',
          background: '#b71c1c',
          marginLeft: '9px',
        }}
      >
        <Link
          href={'/signup'}
          style={{
            color: 'white',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          Registrarse
        </Link>
      </Button>
    </>
  );
};

export default SignUpButton;
