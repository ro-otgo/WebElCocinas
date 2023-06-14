import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PermisosComponent } from './pages/permisos/permisos.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path:'invalid-permissions',
    component: PermisosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
