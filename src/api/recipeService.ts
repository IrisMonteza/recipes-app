import axios from 'axios';

const API = 'https://imonteza-recipes-api.herokuapp.com';

export const getRecipes = async () => {
  return await axios.get(`${API}/recipeList`);
};
