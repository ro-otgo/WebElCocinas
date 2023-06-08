export interface Comment {
  id:number,
  author: string,
  recipeId:number,
  textComment:string,
  date?: Date
}