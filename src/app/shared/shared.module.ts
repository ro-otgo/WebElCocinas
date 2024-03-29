import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PreviewComponent } from './components/preview/preview.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    PreviewComponent,
    CommentsComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    PreviewComponent,
    CommentsComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
