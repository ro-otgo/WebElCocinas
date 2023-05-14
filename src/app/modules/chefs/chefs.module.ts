import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChefsRoutingModule } from './chefs-routing.module';
import { ChefsPageComponent } from './pages/chefs-page/chefs-page.component';


@NgModule({
  declarations: [
    ChefsPageComponent
  ],
  imports: [
    CommonModule,
    ChefsRoutingModule
  ]
})
export class ChefsModule { }
