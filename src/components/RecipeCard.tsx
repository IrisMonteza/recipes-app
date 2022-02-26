import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { Link, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
// import RecipeDetail from '../components/RecipeDetail';
// import { Box } from '@mui/material';

export interface NumberItem {
  name: string;
  type: string;
  description: string;
  preparation: string;
  cityOrigin: string;
}

export default function RecipeReviewCard(props: any) {
  const navigate = useNavigate();
  console.log('PROPPS ', props);
  const handleSubmit = () => {
    navigate('/recipeDetail', { state: props });
  };
  return (
    <>
      {/* <Box sx={{ width: '100%', display: 'flex', alignContent: 'center' }}> */}
      <Card
        sx={{
          maxWidth: 350,

          // justifyContent: 'space-around',
          // flexWrap: 'wrap',
        }}
      >
        <CardHeader title={props.recipe.name} subheader={props.recipe.type} />
        <CardMedia
          component="img"
          height="194"
          image={props.recipe.photo}
          alt={props.recipe.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.recipe.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Button
              style={{
                color: 'black',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
              onClick={handleSubmit}
            >
              Ver Receta
            </Button>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
      {/* </Box> */}
    </>
  );
}
