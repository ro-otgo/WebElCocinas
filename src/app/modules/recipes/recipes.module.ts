import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { DetailRecipesComponent } from './pages/detail-recipes/detail-recipes.component';
import { SharedModule } from '@shared/shared.module';
import { CreateRecipeComponent } from './pages/create-recipe/create-recipe.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    RecipesComponent,
    DetailRecipesComponent,
    CreateRecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    MatExpansionModule
  ]
})
export class RecipesModule { }
