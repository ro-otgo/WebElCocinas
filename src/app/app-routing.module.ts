import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from '@modules/base/pages/base/base.component';
import { ErrorComponent } from '@shared/components/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    loadChildren:() => import('./modules/base/base.module').then(m => m.BaseModule),
  },
  {
    path: 'auth',
    loadChildren:() => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
