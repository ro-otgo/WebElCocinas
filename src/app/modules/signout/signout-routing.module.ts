import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalirComponent } from './pages/salir/salir.component';

const routes: Routes = [
  {
    path: '',
    component: SalirComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignoutRoutingModule { }
