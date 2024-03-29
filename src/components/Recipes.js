import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = props => {
  const { recipes } = props;
  return (
    <div class="card-columns">
      {recipes.map((recipe) => (
        <RecipeItem
          url={recipe.recipe.url}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default Recipes;
