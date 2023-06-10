import { Ingredient } from "./Ingredient";

export interface RecipeDetails {
  id: number,
  image: string,
  title: string,
  ingredients?: Array<Ingredient>,
  recipeText: string
}

