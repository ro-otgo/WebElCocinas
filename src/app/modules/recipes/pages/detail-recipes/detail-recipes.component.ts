import { Component } from '@angular/core';
import { Recipe } from '@core/models/Recipe';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '@core/services/recipe.service';
import { RecipeDetails } from '@core/models/RecipeDetails';

@Component({
  selector: 'app-detail-recipes',
  templateUrl: './detail-recipes.component.html',
  styleUrls: ['./detail-recipes.component.css']
})
export class DetailRecipesComponent {
  recipeDetail?: RecipeDetails;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipeDetail = this.getRecipe();
  }

  getRecipe(): RecipeDetails | undefined {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(`Route ${id}`);
    // this.heroService.getHero(id)
    //   .subscribe(hero => this.hero = hero);
    let recipe = this.recipeService.getRecipeById(id);
    return recipe;
  }

}
