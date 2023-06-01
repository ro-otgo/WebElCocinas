import { Ingredient } from "./Ingredient";

export interface RecipeDetails {
  id: Number,
  image: string,
  title: string,
  ingredients?: Array<Ingredient>,
  recipeText: string
}

