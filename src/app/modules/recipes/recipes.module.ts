import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { DetailRecipesComponent } from './pages/detail-recipes/detail-recipes.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    RecipesComponent,
    DetailRecipesComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule { }
