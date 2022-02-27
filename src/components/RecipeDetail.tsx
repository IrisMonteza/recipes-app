import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const RecipeDetail = () => {
  const { state }: { state: any } = useLocation();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        marginTop: '90px',
      }}
    >
      <Grid item xs={3} sx={{ paddingTop: 1 }}>
        <Card elevation={0} sx={{ maxWidth: 950, paddingTop: 1 }}>
          <CardMedia
            component="img"
            height="220"
            image={state.recipe.photo}
            alt={state.recipe.name}
            sx={{ objectFit: 'contain', paddingBottom: 1 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {state.recipe.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {state.recipe.description}
            </Typography>
            <Typography>{`Porciones: ${state.recipe.portions}`}</Typography>
            <br />
            <Typography>Ingredientes</Typography>
            {state.recipe.ingredients.length > 1
              ? state.recipe.ingredients.map((ingredient: any) => (
                  <li>{`${ingredient.name}: ${ingredient.quantity} ${ingredient.unit}`}</li>
                ))
              : null}

            <Typography>Preparación:</Typography>
            <Typography variant="body2" color="text.secondary">
              {state.recipe.preparation}
            </Typography>

            <br />
            <Typography variant="h6" component="div">
              {`Origen: ${state.recipe.cityOrigin}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default RecipeDetail;
