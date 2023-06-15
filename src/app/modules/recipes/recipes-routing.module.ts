import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailRecipesComponent } from './pages/detail-recipes/detail-recipes.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CreateRecipeComponent } from './pages/create-recipe/create-recipe.component';
import { CheffPermisosGuard } from '@modules/auth/cheff-permisos.guard';
import { PermisosGuard } from '@modules/auth/permisos.guard';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent
  },
  {
    path: 'detail/:id',
    component: DetailRecipesComponent,
    canActivate: [PermisosGuard]
  },
  {
    path: 'create',
    component: CreateRecipeComponent,
    canActivate: [CheffPermisosGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
