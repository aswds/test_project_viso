import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MealPage from "./pages/MealPage";
import { fetchRecipeById } from "./services/fetchRecipes";
import FavoritesPage from "./pages/FavoritePage";

let router = createBrowserRouter([
  {
    path: "/test-project-viso",
    element: <MainPage />,
  },
  {
    path: "recipe/:id",
    element: <MealPage />,
    loader: async ({ params }) => {
      const recipeId = params.id;
      try {
        const recipe = await fetchRecipeById(recipeId);
        console.log(recipe);
        return recipe;
      } catch (error) {
        throw new Response("Not Found", { status: 404 });
      }
    },
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
]);

export { router };