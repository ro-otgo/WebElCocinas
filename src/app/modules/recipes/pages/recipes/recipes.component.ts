import { Component, OnInit } from '@angular/core';
import { Recipe } from '@core/models/Recipe';
import { RecipeDetails } from '@core/models/RecipeDetails';
import { Ingredient } from '@core/models/Ingredient';
import { RecipeService } from '@core/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Array<Recipe> = [];
  recipesDetails: Array<RecipeDetails> = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
