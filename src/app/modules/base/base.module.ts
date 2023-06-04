import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { BaseComponent } from './pages/base/base.component';
import { RouterModule, Routes } from '@angular/router';
import { BaseRoutingModule } from './base-routing.module';



@NgModule({
  declarations: [
      BaseComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule
  ]
})
export class BaseModule { }
