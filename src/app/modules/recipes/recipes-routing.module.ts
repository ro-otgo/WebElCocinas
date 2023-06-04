import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailRecipesComponent } from './pages/detail-recipes/detail-recipes.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CreateRecipeComponent } from './pages/create-recipe/create-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent
  },
  {
    path: 'detail/:id',
    component: DetailRecipesComponent
  },
  {
    path: 'create',
    component: CreateRecipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
