import { Component } from '@angular/core';
import { Recipe } from '@core/models/Recipe';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-recipes',
  templateUrl: './detail-recipes.component.html',
  styleUrls: ['./detail-recipes.component.css']
})
export class DetailRecipesComponent {
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(`Route ${id}`);
    // this.heroService.getHero(id)
    //   .subscribe(hero => this.hero = hero);
  }

}
