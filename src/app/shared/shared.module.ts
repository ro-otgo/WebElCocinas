import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PreviewComponent } from './components/preview/preview.component';


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    PreviewComponent
  ]
})
export class SharedModule { }
