import axios from 'axios';

const API = 'http://localhost:4000';

export const getRecipes = async () => {
  return await axios.get(`${API}/recipeList`);
};
