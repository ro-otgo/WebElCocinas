import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '@core/models/Comments';
import { CommentServiceService } from '@core/services/comment-service.service';
import { UserServiceService } from '@core/services/user-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentService: CommentServiceService,
    private userService: UserServiceService) {}

  model = {
    commentText: '',
  }

  @Input() recipeId: number = -1;

  commentsOfRecipe: Array<Comment> = [];

  ngOnInit(): void {
      this.commentsOfRecipe = this.commentService.getCommentsByRecipeId(this.recipeId);
  }

  onSubmit(): void {
    console.log("submit");
    console.log(`coment ${this.model.commentText}`);
    if(this.model.commentText){
      let author: string = '';
      if (this.userService.sesionActual!=null){
        author = this.userService.sesionActual.author;
      }
      this.commentService.addComment(
        {
          id:0,
          author: author,
          recipeId: this.recipeId || -1,
          textComment:this.model.commentText,
        }
      )
      this.model.commentText = '';

      this.updateComments();
    }
  }

  updateComments():void {
    this.commentsOfRecipe = this.commentService.getCommentsByRecipeId(this.recipeId);
  }

}
