import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { BaseComponent } from './pages/base/base.component';
import { RouterModule, Routes } from '@angular/router';
import { BaseRoutingModule } from './base-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
      BaseComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class BaseModule { }
