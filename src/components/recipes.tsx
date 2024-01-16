import getRecipes from "@/app/controllers/getRecipes";
import { RecipeCard } from "./recipe-card";
import { RecipeType } from "@/types/RecipeType";

export default async function Recipes() {
  const recipes: RecipeType[] = await getRecipes();

  console.log("Inside recipes.tsx", recipes);
  if (recipes === undefined) {
    {
      console.log("inside undefined");
    }
    return (
      <>
        <h1>Still Loading...</h1>
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {recipes.map((recipe: RecipeType) => (
        <RecipeCard key={recipe.image_id} {...recipe} />
      ))}
    </div>
  );
}
