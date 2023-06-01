import { Ingredient } from "./Ingredient";

export interface Recipe {
  id: Number,
  image: string,
  title: string,
  ingredients?: Array<Ingredient>,
  recipeText: string
}

