import React from 'react';

import Recipe from './Recipe/Recipe.js';

const recipes = props =>
  props.recipes.map(recipe => {
    return (
      <Recipe
        //  this is also where we should pass the methods
        name={recipe.name}
        description={recipe.description}
      />
    );
  });

export default recipes;
