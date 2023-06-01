import { Component, Input } from '@angular/core';
import { Recipe } from '@core/models/Recipe';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  @Input()
  recipe!: Recipe;
  constructor() {
    console.log('myCustomComponent');
  }

  ngOnInit() {
  }
}
