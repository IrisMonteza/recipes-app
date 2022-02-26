import { Button, Link } from '@mui/material';
const LogInButton = () => {
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          textTransform: 'none',
          border: 'solid white 1px',
          background: '#b71c1c',
        }}
      >
        <Link
          href={'/signin'}
          style={{
            color: 'white',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          Iniciar Sesión
        </Link>
      </Button>
    </>
  );
};

export default LogInButton;
