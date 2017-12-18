import { Component, OnInit , Input } from '@angular/core';
import  { Dish } from '../dish' ;
import { Comment } from '../comment' ;
import { DishesService } from '../dishes.service' ;
import { tokenNotExpired } from 'angular2-jwt' ;


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private DishesService : DishesService) { }

  ngOnInit() {
    this.loggedin = tokenNotExpired() ;
  }
  @Input()
  dish : Dish ;
  rating : number ;
  comment : string ;
  ratingedit : number ;
  commentedit : string ;
  currentEditing : Comment ;
  public isEditing : boolean = false ;
  public loggedin : boolean ;
  username : string = localStorage.getItem('currentUser') ;
  postComment() : void {
    this.DishesService.postComment(this.rating,this.comment,this.dish._id)
    .subscribe((dish)=>{
      document.location.reload(true) ;
      },()=>console.log('error occured'))
  }
  deleteComment (comment : Comment) : void {
    this.DishesService.deleteComment(this.dish._id,comment._id)
    .subscribe((dish) =>{
      document.location.reload(true) ;
    }, () => console.log('error occured !'))
  }
  editComment() : void {
    this.DishesService.editComment(this.dish._id,this.currentEditing._id,this.ratingedit,this.commentedit)
    .subscribe((dish) => {
      document.location.reload(true) ;
    } , () => console.log('error occured !'))
  }
  commentOwner (comment : Comment) : boolean {
    if(comment.author.username === localStorage.getItem('currentUser')) {
      return true ;
    }
    return false ;
  }
  setEditing(comment : Comment) : void {
    this.isEditing = true ;
    this.commentedit = comment.comment ;
    this.ratingedit = comment.rating ;
    this.currentEditing = comment ;
  }

}
