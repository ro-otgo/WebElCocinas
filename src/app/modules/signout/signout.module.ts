import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalirComponent } from './pages/salir/salir.component';
import { SignoutRoutingModule } from "./signout-routing.module";

@NgModule({
  declarations: [
    SalirComponent
  ],
  imports: [
    CommonModule,
    SignoutRoutingModule
  ],
  
})
export class SignoutModule { }
