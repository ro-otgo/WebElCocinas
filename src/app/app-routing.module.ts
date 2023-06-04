import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from '@modules/base/pages/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    loadChildren:() => import('./modules/base/base.module').then(m => m.BaseModule),
  },
  {
    path: 'auth',
    loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
