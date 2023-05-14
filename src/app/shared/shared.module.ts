import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BotonesComponent } from './components/botones/botones.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BotonesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
