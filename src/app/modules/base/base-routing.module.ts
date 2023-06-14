import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './pages/base/base.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/home/home.module').then(m=> m.HomeModule)
  },
  {
    path: 'recipes',
    loadChildren:() => import('@modules/recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: 'signout',
    loadChildren:() => import('@modules/signout/signout.module').then(m => m.SignoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
