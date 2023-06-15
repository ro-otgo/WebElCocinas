import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalirComponent } from './pages/salir/salir.component';
import { SignoutRoutingModule } from "./signout-routing.module";

import { SalirDialogComponent } from './pages/salir-dialog/salir-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    SalirComponent,
    SalirDialogComponent
  ],
  imports: [
    CommonModule,
    SignoutRoutingModule,
    MatDialogModule,
    MatButtonModule
  ],
  
})
export class SignoutModule { }
