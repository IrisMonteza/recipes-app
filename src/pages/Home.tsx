import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import * as RecipeService from '../api/recipeService';

const Home = () => {
  const [recipes, set_recipes] = useState([] as any);

  useEffect(() => {
    RecipeService.getRecipes().then((recipesResponse: any) => {
      set_recipes(recipesResponse.data);
    });
  }, []);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: {
            xs: '140px auto 0',
            sm: '140px auto 0',
            md: '110px 90px 0',
            lg: '110px 90px 0',
            xl: '110px 90px 0',
          },
          alignContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              marginTop: '20px',
              marginBottom: '15px',
              fontSize: '30px',
              fontFamily: 'Poppins',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Recetas de Comidas Peruanas
          </Typography>
          <Box
            borderBottom={'solid 1px black'}
            width={'50px'}
            margin={'auto'}
          ></Box>
          <Typography
            sx={{
              marginTop: '15px',
              fontSize: '15px',
              fontFamily: 'Poppins',
              fontWeight: 'bold',
            }}
          >
            Recetas populares de la gastronomía peruana
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr',
              md: '1fr 1fr',
              lg: '1fr 1fr 1fr',
              xl: '1fr 1fr 1fr',
            },
            gap: '16px',
            flexWrap: 'wrap',
            margin: '40px auto 0',
            alignContent: 'center',
          }}
        >
          {recipes.length > 1
            ? recipes.map((recipe: any) => <RecipeCard recipe={recipe} />)
            : null}
        </Box>
      </Box>
    </>
  );
};

export default Home;
