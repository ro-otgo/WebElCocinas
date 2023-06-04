import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'recipes',
    loadChildren:() => import('@modules/recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: 'signout',
    loadChildren:() => import('@modules/signout/signout.module').then(m => m.SignoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
