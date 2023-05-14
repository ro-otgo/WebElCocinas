import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetasRoutingModule } from './recetas-routing.module';
import { RecetasPageComponent } from './pages/recetas-page/recetas-page.component';


@NgModule({
  declarations: [
    RecetasPageComponent
  ],
  imports: [
    CommonModule,
    RecetasRoutingModule
  ]
})
export class RecetasModule { }
