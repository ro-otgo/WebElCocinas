import { Component, OnInit } from '@angular/core';
import { Recipe } from '@core/models/Recipe';
import { Ingredient } from '@core/models/Ingredient';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Array<Recipe> = [];

  ngOnInit(): void {
    for (let i=0;i<15;i++){
      let recipe:Recipe = {
        id: i,
        image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2021%2F01%2F21%2Finstant-pot-chicken-and-rice-batch-21.jpg',
        title: `Title ${i}`,
        recipeText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque, turpis in ornare dictum, nulla velit volutpat felis, in mollis ante augue ut arcu. Mauris sed nunc rhoncus, blandit lectus ac, scelerisque leo. Donec blandit feugiat sapien. Nunc viverra nunc velit, eu condimentum justo suscipit eget. Etiam sit amet blandit neque. Cras metus urna, viverra et leo a, viverra aliquet massa. Morbi venenatis dolor ac pulvinar vehicula. Vestibulum est augue, ornare vel venenatis ut, vehicula nec elit. Duis facilisis sapien sed eleifend interdum. Vivamus feugiat lacinia metus et ultrices. Etiam non pulvinar purus. Donec sit amet tempor eros. Quisque luctus massa diam. Fusce eleifend posuere ipsum ut congue. Vivamus porttitor nisl efficitur odio consequat, et feugiat lectus mattis. Etiam dictum tortor at nisl sollicitudin egestas. Nulla et neque massa. Sed nec iaculis mauris, eu posuere felis. Proin ac diam at diam sagittis pulvinar. Nulla faucibus sit amet dui in auctor. Sed aliquet sed turpis sit amet euismod. Curabitur ac turpis et nibh semper tempus aliquet eu ligula.Proin dapibus lectus in dui ultrices posuere. Nullam blandit tortor a libero malesuada laoreet ut lacinia neque. Vivamus sit amet risus metus. Praesent et lobortis leo, eget iaculis massa. Donec sit amet hendrerit massa, eu aliquam lectus. Ut tincidunt, odio non vulputate luctus, ante lorem hendrerit erat, eget faucibus magna diam a ligula. Sed tristique condimentum nisl sit amet auctor. Ut faucibus sem quis est efficitur, eget accumsan libero porta. Aliquam tempor est mattis augue porta, sed euismod enim pellentesque. Morbi fermentum tristique neque, in vehicula lorem elementum non. Donec eget sagittis turpis.Morbi id tristique libero. Fusce ipsum arcu, tincidunt et iaculis in, sagittis vel nisi. Duis turpis nisl, sollicitudin vitae dignissim ac, malesuada a nisi. Sed eu ipsum non nunc condimentum dignissim non et tortor. Donec efficitur, velit in mattis congue, magna sem accumsan libero, at rutrum eros dolor sit amet velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse quis euismod ipsum, vitae scelerisque dolor. Nulla ac turpis in magna aliquet suscipit vel ut risus. Mauris eleifend scelerisque purus. Ut faucibus diam a elit volutpat feugiat. Ut pulvinar velit vel sem accumsan, eu tristique sem dictum.Nam et lacus orci. Suspendisse elementum justo luctus quam sodales, et convallis lorem blandit. Proin nisl augue, gravida sit amet nisi consectetur, facilisis porttitor sem. Suspendisse vulputate, quam in pellentesque vulputate, augue leo consequat arcu, ac pretium dolor nisl nec massa. Pellentesque gravida dapibus sem, sed mollis turpis congue varius. Nam rutrum nisi vitae lorem malesuada, vitae scelerisque leo imperdiet. Mauris nisi ex, viverra vitae ullamcorper eu, porta ac nisi. Ut sed pellentesque purus, ac tincidunt dui. Fusce ac nisi condimentum dui condimentum bibendum. Praesent a scelerisque augue. Donec quis quam at nunc lacinia tempor ac a nibh. Mauris consequat erat eu augue luctus, eu feugiat enim pellentesque. Etiam sit amet tempor lacus. In ut imperdiet odio. Suspendisse potenti. Nulla vel augue feugiat, ultricies mauris ut, sodales odio.',
        ingredients: [
          {
            name:'Ingredient 1',
            quantity: '1 unit'
          }
        ]
      }
      this.recipes.push(recipe)
    }
  }
}
