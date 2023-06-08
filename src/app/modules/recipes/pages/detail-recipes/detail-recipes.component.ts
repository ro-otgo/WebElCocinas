import { Component } from '@angular/core';
import { Recipe } from '@core/models/Recipe';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '@core/services/recipe.service';
import { RecipeDetails } from '@core/models/RecipeDetails';

@Component({
  selector: 'app-detail-recipes',
  templateUrl: './detail-recipes.component.html',
  styleUrls: ['./detail-recipes.component.css'],
})
export class DetailRecipesComponent {
  recipeDetail?: RecipeDetails;

  recipeId:number = -1;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipeDetail = this.getRecipe();
  }

  getRecipe(): RecipeDetails | undefined {
    const id: number = parseInt(this.route.snapshot.params['id']);
    let recipe = this.recipeService.getRecipeById(id);
    this.recipeId = id;
    console.log(`Receta : ${this.recipeId}`);
    return recipe;
  }

}
