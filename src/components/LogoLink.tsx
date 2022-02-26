import { Box, Button, Link } from '@mui/material';
import Image from '../assets/logo-recipe.png';

const LogoLink = () => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={`${Image}`}
          alt="Sabor Peruano logo"
          style={{ height: '35px' }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Button
            sx={{
              display: 'block',
              fontSize: '1.3rem',
              marginLeft: '0.1rem',
              my: 2,
            }}
          >
            <Link
              href={'/'}
              style={{
                fontFamily: 'Poppins',
                color: 'white',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              wayk'uy
            </Link>
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default LogoLink;
