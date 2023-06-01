import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailRecipesComponent } from './pages/detail-recipes/detail-recipes.component';
import { RecipesComponent } from './pages/recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent
  },
  {
    path: 'detail/:id',
    component: DetailRecipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
