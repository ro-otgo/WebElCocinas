import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Comment } from '@core/models/Comments';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  
  comments: Array<Comment> = [];

  constructor() { }

  addComment(comment:Comment): void{
    comment.id = this.comments.length + 1;
    comment.date = new Date();
    this.comments.push(comment);
    console.log(this.comments);
  }

  getCommentsByRecipeId(recipeId?:Number): Array<Comment> {
    return this.comments.filter(c=>c.recipeId==recipeId);
  }
}
